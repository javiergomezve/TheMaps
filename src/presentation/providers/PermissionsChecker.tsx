import {AppState} from 'react-native';
import {Fragment, PropsWithChildren, useEffect} from 'react';

import {usePermissionStore} from '../stores/permissions/usePermissionStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export function PermissionsChecker({children}: PropsWithChildren) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const {locationStatus, checkLocationPermission} = usePermissionStore();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [{name: 'MapsScreen'}],
      });
    } else if (locationStatus !== 'undetermined') {
      navigation.reset({
        routes: [{name: 'MapsScreen'}],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}
