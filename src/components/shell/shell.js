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
            <Topbar/>
            <Intro/>
            <About/>
            <How/>
            <SignUp/>
          </div>
        );
    }
});
