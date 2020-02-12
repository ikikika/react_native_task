import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './Styles';

import DrawerIcon from '../assets/images/drawer.png';

const navbarStyle = StyleSheet.create({
  drawerIconStyle: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
  },
  linkItemContainer: {
    transform: [{rotate: '-90deg'}],
    width: 200,
  },
  linkItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const linkItems = [
  {
    id: 1,
    name: "What's on",
  },
  {
    id: 2,
    name: 'Courses Offered',
  },
  {
    id: 3,
    name: 'Events',
  },
];

const LeftNavBar = () => {
  return (
    <View style={[styles.leftnavBarContainer, styles.mainColorPink]}>
      {/* <TouchableOpacity onPress={() => console.log('Button pressed')}> */}
      <View style={navbarStyle.drawerIconStyle}>
        <Image style={styles.iconSize} source={DrawerIcon} />
      </View>
      {/* </TouchableOpacity> */}

      {linkItems.map(item => (
        <View
          key={item.id}
          style={[navbarStyle.linkItemContainer, styles.alignMiddleOfView]}>
          <Text style={navbarStyle.linkItem}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default LeftNavBar;
