import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {height: height, width: width},
  viewSkip: {flexDirection: 'row', margin: 10},
  viewSkipNumber: {flexDirection: 'row', position: 'absolute', left: 10},
  borderSkip: {position: 'absolute', right: 10},
  textSkip: {fontSize: 16},
  onPress: {
    flexDirection: 'row',
    height: 80,
    width: 300,
    backgroundColor: '#F67952',
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  imageChooseProduct: {alignItems: 'center', margin: 20},
  textName: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {fontSize: 16, alignItems: 'center', margin: 2},
  textNext: {color: 'white', fontSize: 34, fontWeight: 'bold'},
  right: {height: 40, width: 20},
  right1: {height: 40, width: 20, marginLeft: 10},
});
