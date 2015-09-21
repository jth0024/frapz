import React from 'react';
import styles from './how.less';
import Heading from '../heading/heading';
import SubHeading from '../sub-heading/sub-heading';
import Body from '../body/body';

export default React.createClass({
  displayName: 'How',

  render () {
    return (
      <div id='how' className={styles.base + ' how '}>
        <Heading headingType='invert' text='How It Works'/>
        <div className={styles.sectionWrap}>
          <div className={styles.blockWrap}>
            <div className={styles.numberWrap}>
              <div>1</div>
            </div>
            <div className={styles.textWrap}>
              <SubHeading subHeadingType='invert' text="Activate your ad"/>
              <div className={styles.bodyWrap}>
                <Body bodyType='invert' text="The process is simple. Go to lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Etc. Lorem."/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionWrap}>
          <div className={styles.blockWrap + ' ' + styles.right}>
            <div className={styles.numberWrap}>
              <div>2</div>
            </div>
            <div className={styles.textWrap}>
              <SubHeading subHeadingType='invert' text="Go to a hotspot"/>
              <div className={styles.bodyWrap}>
                <Body bodyType='invert' text="Take your laptop to a hotspot and study. Go to lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Etc. Lorem."/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionWrap}>
          <div className={styles.blockWrap}>
            <div className={styles.numberWrap}>
              <div>3</div>
            </div>
            <div className={styles.textWrap}>
              <SubHeading subHeadingType='invert' text="Get paid. Easy."/>
              <div className={styles.bodyWrap}>
                <Body bodyType='invert' text="It's almost too easy. Just stay in the hotspot as long as you like and get paid for your time. Go to lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Etc. Lorem."/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
