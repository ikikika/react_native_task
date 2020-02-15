import React, {useState} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Swipe = () => {
  const [currentState, setCurrentState] = useState({
    myText: "I'm ready to get swiped!",
    gestureName: 'none',
    backgroundColor: 'blue',
  });

  const onSwipeRight = gestureState => {
    setCurrentState({myText: 'You swiped right!'});
  };

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_RIGHT} = swipeDirections;
    setCurrentState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_RIGHT:
        setCurrentState({backgroundColor: 'yellow'});
        break;
    }
  };
  // const onSwipeRight = gestureState => {
  //   console.log('You swiped right!');
  // };
  // const onSwipe = (gestureName, gestureState) => {
  //   const {SWIPE_RIGHT} = swipeDirections;
  //   setCurrentState({gestureName: gestureName});
  // };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 10,
  };

  return (
    <GestureRecognizer
      onSwipe={onSwipe}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <Text style={{fontSize: 20, color: 'red'}}>{currentState.myText}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>
        onSwipe callback received gesture: {currentState.gestureName}
      </Text>
    </GestureRecognizer>
  );
};

export default Swipe;
