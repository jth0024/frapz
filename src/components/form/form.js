import React from 'react';
import $ from 'jquery';
import styles from './form.less';
import FormInput from '../form-input/form-input';
import FormSubmit from '../form-submit/form-submit';

export default React.createClass({
  displayName: 'Form',

  componentWillMount () {
    this.model = {};
    this.inputs = {};
    this.registerInputs(this.props.children);
  },

  registerInputs (children) {
    React.Children.forEach(children, child => {
      if (child.props.name) {
        child.props.attachToForm = this.attachToForm;
        child.props.detachFromForm = this.detachFromForm;
      }

      if (child.props.children) {
        this.registerInputs(child.props.children);
      }
    }.bind(this));
  },

  attachToForm (component) {
    this.inputs[component.props.name] = component;
    this.model[component.props.name] = component.state.value;
  },

  detachFromForm (component) {
    delete this.inputs[component.props.name];
    delete this.model[component.props.name];
  },

  updateModel (component) {
    Object.keys(this.inputs).forEach(name => {
      this.model[name] = this.inputs[name].state.value;
    }.bind(this));
  },

  submit (e) {
    e.preventDefault();
    this.updateModel();
    console.log(this.model);
    $.post('/php/signup.php', this.model);
  },

  render () {
    return (
			<form onSubmit={this.submit} className={styles.base + ' form'}>
        {this.props.children}
        <FormSubmit text='Sign Up'/>
			</form>
    );
  }
});
