import React from 'react';
import {View} from 'react-native';

import LeftNavBar from '../components/LeftNavBar';
import Header from '../components/Header';
import Body from '../components/Body';
import styles from '../components/Styles';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <LeftNavBar />
      <View style={styles.contentContainer}>
        <Header />
        <Body />
      </View>
    </View>
  );
};

export default Main;
