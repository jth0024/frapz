import React from 'react';
import styles from './form-submit.less';

export default React.createClass({
  displayName: 'Form Submit',

  render () {
    return (
				<button className={styles.base + ' formSubmit'} type='submit'>{this.props.text.toUpperCase()}</button>
    );
  }
});
