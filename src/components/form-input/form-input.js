import React from 'react';
import styles from './form-input.less';

export default React.createClass({
  displayName: 'Form Input',

  render () {
    return (
			<input className={styles.base + ' formInput '} type="text" id={this.props.id} placeholder={this.props.placeholder}/>
    );
  }
})
