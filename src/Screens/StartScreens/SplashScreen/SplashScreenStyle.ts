import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  imageLogo108: {
    width: height,
    height: '100%',
  },
});
