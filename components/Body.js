import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native';

import ImgCooking from '../assets/images/cooking.jpg';
import ImgLesson from '../assets/images/art-and-crafts.jpg';
import styles from './Styles';

const bodyItemStyle = StyleSheet.create({
  imageStyle: {resizeMode: 'contain', marginBottom: 10, marginTop: 10},
  buttonStyle: {backgroundColor: '#FFA500', height: 40},
  buttonTextStyle: {color: '#fff'},
});

const Body = () => {
  const [bodyItems, setBodyItems] = useState([]);
  const {width} = Dimensions.get('window');

  useEffect(() => {
    setBodyItems([
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
    ]);
  });

  return (
    <View style={{flex: 7}}>
      <ScrollView>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.textTitle}>Lorem Ipsum</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <View style={styles.bodyMapContainer}>
          {bodyItems.map(item => (
            <View key={item.id}>
              <ImageBackground
                style={[
                  {
                    width: width * 0.5 * 1.5,
                    height: width * 0.5,
                  },
                  bodyItemStyle.imageStyle,
                ]}
                source={item.image}
              />
              <TouchableOpacity
                title={item.title}
                style={[bodyItemStyle.buttonStyle, styles.alignMiddleOfView]}
                onPress={() => Alert.alert('Button pressed')}>
                <Text style={bodyItemStyle.buttonTextStyle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Body;
