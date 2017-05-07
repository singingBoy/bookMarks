import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TopBar from '../components/TopBar';
import LeftBar from '../components/LeftBar';

import {checkSupport, getAllUsers} from '../utils/fileDao'

function IndexPage(props) {
  checkSupport(1)
  getAllUsers().then(res => {console.log(res)})
  return (
    <div className={styles.contain}>
      <TopBar/>
      <div style={{display:'flex'}}>
        <LeftBar />
        <div className={styles.connect}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
