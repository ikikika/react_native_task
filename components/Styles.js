import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, flexDirection: 'row'},
  leftnavBarContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 1000,
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  bodyTextContainer: {
    flex: 1,
    padding: 20,
  },
  bodyMapContainer: {flex: 1, padding: 20},

  mainColorPink: {
    backgroundColor: '#E68278',
  },
  alignMiddleOfView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSize: {width: 50, height: 50},
  textTitle: {fontSize: 30},
  applyShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export default styles;
