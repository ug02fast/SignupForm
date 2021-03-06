import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render_field';
import ScrollHeader from './scroll_header';

const required = value => value ? undefined : 'Required';
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more`: undefined;
const minLength6 = minLength(6);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const yahoo = value =>
  value && /.+@yahoo\.com/.test(value) ? 'Cool people use Yahoo' : undefined;
const matchPass = (value, allValues) => {
  return value !== allValues.password ? `Passwords don't match` : undefined;
}

let EmailView = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <ScrollHeader page={1} />
      <div>
        <Field name='email' component={renderField}
          type='email' label='Email' validate={[ email, required ]} warn={yahoo} />
      </div>
      <div>
        <Field name='password' component={renderField} 
          type='password' label='Password' validate={[ required, minLength6 ]}/>
      </div>
      <div>
        <Field name='confirmPassword' component={renderField} 
          type='password' label='Confirm Password' validate={[ required, matchPass ]}/>
      </div>
      <div>
        <button type='submit' className='next'>Next</button>
      </div>
    </form>
  );
}

export default EmailView = reduxForm({
  form: 'email',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false 
})(EmailView);
