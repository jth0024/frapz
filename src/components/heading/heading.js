import React from 'react';
import styles from './heading.less';

export default React.createClass({
  displayName: 'Heading',

  render() {
    return (
      <h1 className={styles[this.props.headingType] + ' heading '}>{this.props.text}</h1>
    );
  }
});
