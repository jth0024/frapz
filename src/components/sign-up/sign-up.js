import React from 'react';
import styles from './sign-up.less';
import Heading from '../heading/heading';
import Body from '../body/body';
import Form from '../form/form';

export default React.createClass({
  displayName: 'Sign Up',

  render () {
    return (<div id='sign-up' className={styles.base + ' signUp '}>
      <Heading headingType='invert' text='Sign Up'/>
      <Form/>
    </div>);
  }
});
