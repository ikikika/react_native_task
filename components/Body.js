import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import UIButton from './UI/UIButton';
import ImgCooking from '../assets/images/cooking.jpg';
import ImgLesson from '../assets/images/art-and-crafts.jpg';
import styles from './Styles';

const bodyItemStyle = StyleSheet.create({
  imageStyle: {resizeMode: 'contain', marginBottom: 10, marginTop: 10},
  buttonStyle: {backgroundColor: '#FFA500', height: 40},
  buttonTextStyle: {color: '#fff'},
});

const Body = props => {
  const {contentWidth} = props;

  const bodyItems = [
    {
      id: 1,
      title: 'Courses',
      image: ImgCooking,
    },
    {
      id: 2,
      title: 'Programs',
      image: ImgLesson,
    },
    {
      id: 3,
      title: 'Programs',
      image: ImgLesson,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.bodyTextContainer}>
        <Text style={styles.textTitle}>Lorem Ipsum</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <View style={styles.bodyMapContainer}>
        {bodyItems.map(item => (
          <View key={item.id}>
            <ImageBackground
              style={[
                {
                  width: contentWidth - 40,
                  height: (contentWidth - 40) / 1.5,
                },
                bodyItemStyle.imageStyle,
                styles.applyShadow,
              ]}
              source={item.image}
            />
            <UIButton title={item.title} />
          </View>
        ))}
      </View>
      <View style={{height: 50}} />
    </ScrollView>
  );
};

export default Body;
