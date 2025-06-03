import '../gesture-handler.native';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './presentation/navigation/StackNavigator';
import {PermissionsChecker} from './presentation/providers/PermissionsChecker';

export default function TheMapsApp() {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
}
