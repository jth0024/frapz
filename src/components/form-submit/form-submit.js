import React from 'react';
import styles from './form-submit.less';

export default React.createClass({
  displayName: 'Form Submit',

  render () {
    return (
				<div className={styles.base + ' formSubmit'} onClick={this.props.onClick} id="formSubmit">{this.props.text.toUpperCase()}</div>
    );
  }
});
