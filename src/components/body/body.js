import React from 'react';
import styles from './body.less';

export default React.createClass({
  displayName: 'Body',

  render() {
    return (
      <p className={styles[this.props.bodyType] + ' body '}>{this.props.text}</p>
    );
  }
});
