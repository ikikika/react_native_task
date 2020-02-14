import React from 'react';
import {Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import styles from '../Styles';

const thisStyle = StyleSheet.create({
  buttonStyle: {backgroundColor: '#FFA500', height: 40},
  buttonTextStyle: {color: '#fff'},
});

const UIButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity
      title={title}
      style={[
        thisStyle.buttonStyle,
        styles.alignMiddleOfView,
        styles.applyShadow,
      ]}
      onPress={() => Alert.alert('Button pressed')}>
      <Text style={thisStyle.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default UIButton;
