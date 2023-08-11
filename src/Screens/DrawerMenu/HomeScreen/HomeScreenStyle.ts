import { Dimensions, StyleSheet } from 'react-native';
import Color from '@/Themes/Colors';
import Colors from '@/Themes/Colors';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  keyboardAware: { flex: 1 },
  container: { flex: 1, height, margin: 10 },
  itemCategory: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    height: 115,
    width: width * 0.35,
  },
  coverImage: {
    flex: 0.65,

    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  textBottomImage: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: 'black',
    marginTop: 2,
    fontSize: 13,
    textAlign: 'center',
  },
  viewNotification: {
    // marginVertical: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  viewImageList: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMessage: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iMessage: { height: '50%', width: '50%' },
  Notification: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLocation: { height: 18, width: 15 },
  textNotification: { fontSize: 20, opacity: 0.5 },
  textExplore: { fontWeight: 'bold', fontSize: 24, marginVertical: 5 },
  textBest: { fontSize: 26, opacity: 0.4 },
  viewSearch: {
    marginVertical: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  viewTextSearch: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageViewSearch: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  imageSearch: { tintColor: Color.black, height: '40%', width: '40%' },
  view1: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  viewNewSee: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewNew: { flex: 0.8 },
  textNew: { fontSize: 24, fontWeight: 'bold' },
  viewSee: { flex: 0.2 },
  textSee: {
    fontSize: 24,
    opacity: 0.5,
  },
  view2: {
    width: '100%',
    height: 220,
    backgroundColor: Color.white,
    borderRadius: 15,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,

  },

  modalView: {
    width: '70%',
    margin: 10,
    backgroundColor: Colors.linen,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
  },
  modalText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.85,
    elevation: 5,
  },
  modalTextQuestion: {
    // textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.85,
    elevation: 5,
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  coverViewOK: { flex: 0.3 },
  buttonOk: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 5,
  },
  textOK: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconOK: { fontWeight: 'bold', fontSize: 20, marginHorizontal: 5 },
  containerAvatar: {
    flex: 0.2,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
});
