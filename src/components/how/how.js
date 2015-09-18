import React from 'react';
import styles from './how.less';
import Heading from '../heading/heading';
import Body from '../body/body';

export default React.createClass({
  displayName: 'How',

  render () {
    return (<div id='how' className={styles.base + ' how '}>
      <Heading headingType='invert' text='How It Works'/>
      <Body bodyType='invert' text="It's simple. Activate your ad. Go to a hotspot. Get paid."/>
    </div>);
  }
});
