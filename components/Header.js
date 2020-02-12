import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './Styles';

import SearchIcon from '../assets/images/search-icon.png';

const headerItemStyle = StyleSheet.create({
  iconSpace: {width: 70, height: 70, marginRight: 20},
  YSButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  YSText: {fontSize: 30, color: '#fff'},
});

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={[headerItemStyle.iconSpace, styles.alignMiddleOfView]}>
        <View
          style={[
            headerItemStyle.YSButton,
            styles.mainColorPink,
            styles.alignMiddleOfView,
            styles.applyShadow,
          ]}>
          <Text style={headerItemStyle.YSText}>YS</Text>
        </View>
      </View>

      <View style={[headerItemStyle.iconSpace, styles.alignMiddleOfView]}>
        <Image style={styles.iconSize} source={SearchIcon} />
      </View>
    </View>
  );
};

export default Header;
