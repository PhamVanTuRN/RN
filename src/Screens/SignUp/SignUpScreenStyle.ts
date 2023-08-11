import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
  keyboardAware: { flex: 1 },
  container: { flex: 1, height, marginHorizontal: 20 },
  logoWrap: { alignItems: 'center' },
  imageLogo: { width: 81, height: 93, marginBottom: 20 },
  nameCompany: { marginTop: 20, alignItems: 'center' },
  textNameCompany: { fontWeight: 'bold', fontSize: 28, margin: 20 },
  itemInputLoginWrap: {
    flexDirection: 'row',
    height: 57,
    width: '100%',
    borderColor: 'GhostWhite',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F0F8FF',
  },
  inputLoginLogo: {
    flex: 0.15,
    width: 48,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(246, 121,82,0.3)',
  },
  imageMessage: { height: 24, width: 24 },
  loginTextInput: { flex: 0.85 },
  inputPasswordWrap: {
    flexDirection: 'row',
    height: 57,
    width: '100%',
    borderColor: 'GhostWhite',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F0F8FF',
  },
  inputPasswordLogo: {
    flex: 0.15,
    width: 48,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(246, 121,82,0.3)',
  },
  imageLock: { height: 24, width: 24 },
  textInputPassword: {
    flex: 0.65,
  },
  buttonEyeWrap: {
    flex: 0.15,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageEye: { height: '60%', width: '80%' },
  forgotPassword: { marginTop: 10 },
  forgotPasswordText: {
    position: 'absolute',
    right: 0,
    color: 'black',
    fontStyle: 'italic',
  },
  buttonLoginWrap: { alignItems: 'center', marginTop: 40 },
  buttonLogin: {
    width: 205,
    height: 70,
    borderRadius: 30,
    backgroundColor: 'rgba(246, 121,82,1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonLoginText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemNotAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  textQuestion: {
    fontSize: 20,
    alignItems: 'center',
  },
  textAnswer: {
    fontSize: 20,
    color: 'black',
    marginLeft: 3,
    fontWeight: 'bold',
  },
  viewLine: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOr: { margin: 20, fontSize: 20, fontWeight: 'bold' },
  facebookGoogle: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { margin: 20 },
  checkboxWrap: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCheckbox: { fontWeight: 'bold' },
});