import React from 'react';
import styles from './sign-up.less';
import Heading from '../heading/heading';
import Body from '../body/body';
import Form from '../form/form';
import FormInput from '../form-input/form-input';

export default React.createClass({
  displayName: 'Sign Up',

  render () {
    return (
      <div ref='sign-up' id='sign-up' className={styles.base + ' signUp '}>
        <Heading headingType='invert' text='Sign Up'/>
        <Form>
          <FormInput placeholder='First Name' name='firstname'/>
          <FormInput placeholder='Last Name' name='lastname'/>
          <FormInput placeholder='email@example.com' name='email'/>
          <FormInput placeholder='Phone Number' name='phonenumber'/>
          <FormInput placeholder='School' name='school'/>
        </Form>
      </div>
    );
  }
});
