import React from 'react';
import styles from './form.less';
import FormInput from '../form-input/form-input';
import FormSubmit from '../form-submit/form-submit';

export default React.createClass({
  displayName: 'Form',

  render () {
    return (
			<form className={styles.base + ' form'}>
        <FormInput placeholder='First Name' id='firstname'/>
        <FormInput placeholder='Last Name' id='lastname'/>
        <FormInput placeholder='email@example.com' id='email'/>
        <FormInput placeholder='Phone Number' id='phonenumber'/>
        <FormInput placeholder='School' id='school'/>
        <FormSubmit text='Sign Up'/>
			</form>
    );
  }
});
