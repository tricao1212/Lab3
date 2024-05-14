import React from 'react';
import BottomNav from './BottomNav';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './MyStack';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
};

export default App;
