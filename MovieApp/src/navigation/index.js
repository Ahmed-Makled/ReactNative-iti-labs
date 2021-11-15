import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import RNBootSplash from 'react-native-bootsplash';

const AppContainer = () => (
  <NavigationContainer onReady={() => RNBootSplash.hide()}>
    <MainStack />
  </NavigationContainer>
);

export default AppContainer;
