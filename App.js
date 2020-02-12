import React from 'react';
import {SafeAreaView} from 'react-native';

import Main from './screen/Main';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;