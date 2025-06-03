import '../gesture-handler.native'

import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './presentation/navigation/StackNavigator';

export default function TheMapsApp() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}