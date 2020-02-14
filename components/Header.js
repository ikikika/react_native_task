import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './Styles';

import SearchIcon from '../assets/images/search-icon.png';

const contentItemStyle = StyleSheet.create({
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
    <>
      <View style={[{width: '100%'}, styles.headerContainer]}>
        <View style={[contentItemStyle.iconSpace, styles.alignMiddleOfView]}>
          <View
            style={[
              contentItemStyle.YSButton,
              styles.mainColorPink,
              styles.alignMiddleOfView,
              styles.applyShadow,
            ]}>
            <Text style={contentItemStyle.YSText}>YS</Text>
          </View>
        </View>

        <View style={[contentItemStyle.iconSpace, styles.alignMiddleOfView]}>
          <Image style={styles.iconSize} source={SearchIcon} />
        </View>
      </View>
    </>
  );
};

export default Header;
