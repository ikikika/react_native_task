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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
  const [gestureName, setGestureName] = useState('none');

  const offsetTop = getStatusBarHeight() === 24 ? 0 : getStatusBarHeight();
  const height = Dimensions.get('window').height - offsetTop;

  const onSwipeRight = gestureState => {
    console.log('You swiped right!');
    setMenuOpen(true);
  };
  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_RIGHT} = swipeDirections;
    setGestureName(gestureName);
  };

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
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 10,
  };

  return (
    <Animated.View
      style={[
        animatedStyle,
        styles.leftnavBarContainer,
        styles.mainColorPink,
        styles.applyShadow,
      ]}>
      <GestureRecognizer
        onSwipe={onSwipe}
        onSwipeRight={onSwipeRight}
        config={config}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <TouchableWithoutFeedback
          style={{flex: 1, top: 0}}
          onPress={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <View
              style={[{width: 40, height: 40}, navbarStyle.drawerIconStyle]}>
              <Image style={styles.iconSize} source={CloseMenu} />
            </View>
          ) : (
            <View style={navbarStyle.drawerIconStyle}>
              <Image style={styles.iconSize} source={DrawerIcon} />
            </View>
          )}
        </TouchableWithoutFeedback>
        {linkItems.map(item => (
          <View
            key={item.id}
            style={[navbarStyle.linkItemContainer, styles.alignMiddleOfView]}>
            <Text style={navbarStyle.linkItem}>{item.name}</Text>
          </View>
        ))}
      </GestureRecognizer>
    </Animated.View>
  );
};

export default LeftNavBar;
