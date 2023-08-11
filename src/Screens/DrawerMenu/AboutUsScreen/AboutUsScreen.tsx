import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';

const AboutUs = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const back = () => {
    Keyboard.dismiss();
    // @ts-ignore
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{false: 'navy', true: 'black'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="green"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
export default AboutUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
