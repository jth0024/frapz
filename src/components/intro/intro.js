import React from 'react';
import styles from './intro.less';
import Heading from '../heading/heading';
import Button from '../button/button';

export default React.createClass({
  displayName: 'Intro',

  render () {
    return (
      <div id='intro' className={styles.base + ' intro'}>
        <Heading headingType='invert' text='Unleash your earning potential'/>
        <Button text='Learn More' buttonType='ghost'/>
      </div>
    );
  }
});
