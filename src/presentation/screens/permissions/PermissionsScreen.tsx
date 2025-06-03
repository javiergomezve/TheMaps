import {Pressable, Text, View} from 'react-native';

import {globalStyles} from '../../../config/theme/styles';
import {usePermissionStore} from '../../stores/permissions/usePermissionStore';

export default function PermissionsScreen() {
  const {locationStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={{color: 'white'}}>Habilitate location</Text>
      </Pressable>

      <Text>Current status: {locationStatus}</Text>
    </View>
  );
}
