import React from 'react';
import styles from './button.less';

export default React.createClass({
  displayName: 'Button',

  render () {
    return (
      <button className={styles[this.props.buttonType] + ' button ' + this.props.className} onClick={this.props.onClick}>
        <span>{this.props.text.toUpperCase()}</span>
      </button>
    );
  }
});
