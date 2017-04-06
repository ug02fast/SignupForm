import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


const required = value => value ? undefined : 'Required';
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more`: undefined;
const minLength6 = minLength(6);
const matchPass = value => value !== password.value ? `Passwords do not match` : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const yahoo = value =>
  value && /.+@yahoo\.com/.test(value) ? 'Cool people use Yahoo' : undefined;
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const EmailView = props => {
  const { handleSubmit, fields: { password, confirmPassword }, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
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
          type='password' label='Confirm Password' validate={[ required ]}/>
      </div>
      <button type='submit' disabled={submitting}>Next</button>
    </form>
  );
}

export default reduxForm({
  form: 'email'
}, )(EmailView);
