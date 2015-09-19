import React from 'react';
import Topbar from '../topbar/topbar';
import Intro from '../intro/intro';
import About from '../about/about';
import How from '../how/how';
import SignUp from '../sign-up/sign-up';
import styles from './shell.less';

export default React.createClass({
    displayName: 'Shell',

    render () {
        return (
          <div className='shell'>
            <Topbar onButtonClick={this.scrollToSignUp}/>
            <Intro onButtonClick={this.scrollToAbout}/>
            <About/>
            <How/>
            <SignUp/>
          </div>
        );
    },

    scrollToAbout () {
      const top = document.getElementById('about').offsetTop;
      window.scrollTo(0, top);
    },

    scrollToSignUp () {
      const top = document.getElementById('sign-up').offsetTop;
      window.scrollTo(0, top);
    }
});
