import React from 'react';
import styles from './topbar.less';
import Button from '../button/button';
import Link from '../link/link';

export default React.createClass({
  displayName: 'Topbar',

  render () {
    return (<div className={styles.base}><Link text='FRAPZ'/><Button className='right' buttonType='ghost' text='sign up'/></div>);
  }
});
