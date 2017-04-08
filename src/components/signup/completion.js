import React from 'react';
import { reduxForm } from 'redux-form';

let Completion = props => {
  const { handleSubmit, prevPage, submitting, pristine } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type='button' className='previous' onClick={prevPage}>Previous</button>
        <button type='submit' className='toDashboard' disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

export default Completion = reduxForm({
  form: 'email',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true 
})(Completion);
