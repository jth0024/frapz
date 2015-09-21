import React from 'react';
import styles from './form-input.less';

export default React.createClass({
  displayName: 'Form Input',

  getInitialState () {
    return {
      value: this.props.value || ''
    };
  },

  componentWillMount () {
    this.props.attachToForm(this);
  },

  componentWillUnmount () {
    this.props.detachFromForm(this);
  },

  setValue (e) {
    this.setState({
      value: e.currentTarget.value
    });
  },

  render () {
    return (
			<input className={styles.base + ' formInput '} type="text" value={this.state.value} onChange={this.setValue} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder}/>
    );
  }
})
