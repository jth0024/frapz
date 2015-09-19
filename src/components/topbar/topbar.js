import React from 'react';
import styles from './topbar.less';
import Button from '../button/button';
import Link from '../link/link';

export default React.createClass({
  displayName: 'Topbar',

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  },

  render () {
    return (
      <div ref='topbar' className={styles.base}>
        <Link text='FRAPZ'/>
        <div className={styles.topbarLinks}>
          <Button onClick={this.props.onButtonClick} buttonType='ghost' text='sign up'/>
        </div>
      </div>
    );
  },

  handleScroll() {
    const opacity = document.body.scrollTop / 200;
    this.refs.topbar.getDOMNode().style.background = opacity >= .75 ? 'rgba(38,50,56,.75)' : 'rgba(38,50,56,' + opacity + ')';
  }

});
