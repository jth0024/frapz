import React from 'react';
import styles from './about.less';
import Heading from '../heading/heading';
import Body from '../body/body';

export default React.createClass({
  displayName: 'About',

  render () {
    return (<div id='about' className={styles.base + ' about '}>
      <Heading headingType='invert' text='About Us'/>
      <Body bodyType='invert' text="At Frapz, we're paving the way for a mobile advertising revolution. We've created an entirely new advertising experience that's fun, simple, and powerful."/>
    </div>);
  }
});
