import React from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';

import LeftNavBar from './components/LeftNavBar';
import Header from './components/Header';
import Body from './components/Body';
import Swipe from './components/Swipe';

const App = () => {
  const width = Dimensions.get('window').width - 50;
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={{width, alignSelf: 'flex-end'}}>
        <Header contentWidth={width} />
        <Body contentWidth={width} />
      </View>
      <LeftNavBar />
      {/* <Swipe /> */}
    </SafeAreaView>
  );
};

export default App;
