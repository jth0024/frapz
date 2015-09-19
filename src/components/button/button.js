import React from 'react';
import styles from './button.less';

export default React.createClass({
  displayName: 'Button',

  render () {
    return (
      <button onClick={this.props.onClick} className={styles[this.props.buttonType]}>
        <span>{this.props.text.toUpperCase()}</span>
      </button>
    );
  }
});
