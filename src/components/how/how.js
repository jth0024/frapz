import React from 'react';
import styles from './how.less';
import Heading from '../heading/heading';
import Body from '../body/body';

export default React.createClass({
  displayName: 'How',

  render () {
    return (<div id='how' className={styles.base + ' how '}>
      <Heading headingType='invert' text='How It Works'/>
      <div className='col-group'>
        <div className="col-dt-6"><Body bodyType='invert' text="Activate your ad."/></div>
        <div className="col-dt-6"><Body bodyType='invert' text="Go to a hotspot."/></div>
      </div>
    </div>);
  }
});
