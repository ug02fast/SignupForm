import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render_field';

let PersonalDetails = props => {
  const { handleSubmit, prevPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='dd' component={renderField} type='text' label='DD' />
        <Field name='mm' component={renderField} type='text' label='MM' />
        <Field name='yyyy' component={renderField} type='text' label='yyyy' />
      </div>
      <button type='submit' className='previous' onClick={prevPage}>Previous</button>
      <button type='submit' className='next'>Next</button>
    </form>
  )
}

export default PersonalDetails = reduxForm({
  form: 'email',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true 
})(PersonalDetails);
