import React, {useEffect, useState} from 'react';
import {
  Animated,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import styles from './Styles';
import DrawerIcon from '../assets/images/drawer.png';
import CloseMenu from '../assets/images/close-menu.png';

const navbarStyle = StyleSheet.create({
  drawerIconStyle: {
    width: 50,
    height: 50,
  },
  linkItemContainer: {
    flex: 3,
    width: 50,
  },
  linkItem: {
    transform: [{rotate: '-90deg'}],
    width: 200,
    textAlign: 'center',
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
  const [animationValue, setAnimationValue] = useState(new Animated.Value(50));
  const [menuOpen, setMenuOpen] = useState(false);

  const offsetTop = getStatusBarHeight() === 24 ? 0 : getStatusBarHeight();

  const height = Dimensions.get('window').height - offsetTop;

  const menuItemV = linkItems.map(item => (
    <View
      key={item.id}
      style={[navbarStyle.linkItemContainer, styles.alignMiddleOfView]}>
      <Text style={navbarStyle.linkItem}>{item.name}</Text>
    </View>
  ));
  const menuItemH = linkItems.map(item => (
    <View key={item.id} style={{flex: 3}}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        {item.name}
      </Text>
    </View>
  ));

  useEffect(() => {
    if (menuOpen) {
      Animated.timing(animationValue, {
        toValue: 300,
        timing: 1000,
      }).start();
    } else {
      Animated.timing(animationValue, {
        toValue: 50,
        timing: 1000,
      }).start();
    }
  }, [menuOpen]);

  const animatedStyle = {
    width: animationValue,
    height: height,
    top: offsetTop,
  };

  return (
    <Animated.View
      style={[
        animatedStyle,
        styles.leftnavBarContainer,
        styles.mainColorPink,
        styles.applyShadow,
      ]}>
      <TouchableWithoutFeedback
        style={{flex: 1, top: 0}}
        onPress={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <View style={[{width: 40, height: 40}, navbarStyle.drawerIconStyle]}>
            <Image style={styles.iconSize} source={CloseMenu} />
          </View>
        ) : (
          <View style={navbarStyle.drawerIconStyle}>
            <Image style={styles.iconSize} source={DrawerIcon} />
          </View>
        )}
      </TouchableWithoutFeedback>
      {menuItemV}
    </Animated.View>
  );
};

export default LeftNavBar;
