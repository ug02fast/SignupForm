import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render_field';
//const sources = ['Indeed', 'Friend', 'LinkedIn', 'Other'] 

const required = value => value ? undefined : 'Required';
const ddLimits = value => {
  if (value && value > 31) {
    return `Must be before the 31st`
  } else if (value && value < 1) {
    return `Must be after the 1st`
  } else {
    return undefined;
  }
}
const mmLimits = value => {
  if (value && value > 12) {
    return `Must be before the 12th month`;
  } else if (value && value < 1) {
    return `Must be after the 1st month`;
  } else {
    return undefined;
  }
}
const number = value =>
  value && isNaN(Number(value)) ? `Entry should be a number` : undefined;
const renderError = ({ meta: { touched, error} }) => touched && error ?
  <span>{error}</span> : false;
let dt = new Date();
const confirm18 = value =>
  value && dt.getFullYear() - value < 18 ? `Must be 18 or older to sign up` : undefined;
const febCase = (value, allValues) => {
  console.log(allValues);
  if (value && (allValues.mm === 2 && allValues.dd > 28)) {
    console.log('in here')
    return `This is an invalid date`;
  } else {
    console.log('in here 2');
    return undefined;
  }
}


let PersonalDetails = props => {
  const { handleSubmit, prevPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>DOB</label>
        <Field name='dd' component={renderField} type='text' validate={[ required, ddLimits, number ]} />
        <Field name='mm' component={renderField} type='text' validate={[ required, mmLimits, number, febCase ]} />
        <Field name='yyyy' component={renderField} type='text' validate={[ required, number, confirm18 ]} />
      </div>
      <div>
        <label>Gender</label>
        <Field name='gender' label='Male' component={renderField} type='radio' value='male' validate={[ required ]} />
        <Field name='gender' label='Female' component={renderField} type='radio' value='female' validate={[ required ]} /> 
        <Field name='gender' label='Unspecified' component={renderField} type='radio' value='unspecified' validate={[ required ]} /> 
      </div>
      <div>
        <label>Where did you hear about us?</label>
        <Field name='heardSource' component='select'>
          <option></option>
          <option value='Indeed'>Indeed</option>
          <option value='Linked'>LinkedIn</option>
          <option value='Friend'>Friend</option>
          <option value='Other'>Other</option>
        </Field>
      </div>
      <div>
        <button type='button' className='previous' onClick={prevPage}>Previous</button>
        <button type='submit' className='next'>Next</button>
      </div>
    </form>
  )
}

export default PersonalDetails = reduxForm({
  form: 'email',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false 
})(PersonalDetails);
