import React from 'react';
import styles from './link.less';

export default React.createClass({
  displayName: 'Link',

  render () {
    return (
      <a className={styles.base + ' link ' + this.props.className}><span>{this.props.text}</span></a>
    );
  }
});
