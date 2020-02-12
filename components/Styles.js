import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, flexDirection: 'row'},
  leftnavBarContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentContainer: {flex: 5},
  headerContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  bodyTextContainer: {
    flex: 1,
    padding: 20,
    // borderBottom: 1,
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
    shadowOffset: {width: 50, height: 50},
    // shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});

export default styles;
