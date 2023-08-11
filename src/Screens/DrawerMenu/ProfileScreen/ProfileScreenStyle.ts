import {Dimensions, StyleSheet} from 'react-native';

import Colors from '@/Themes/Colors';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  coverBack: {
    flex: 0.12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  imageBackgroundProfile: {flex: 0.28},
  textBack: {fontWeight: 'bold', fontSize: 20},
  coverProfile: {
    flex: 0.18,
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProfile: {
    fontWeight: 'bold',
    fontSize: 24,

    marginLeft: width * 0.1,
  },
  threeDots: {flex: 0.1},
  iconThreeDots: {fontWeight: 'bold', fontSize: 24},
  avatarContainer: {
    // flex: 0.82,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -width * 0.12,
    right: '25%',
  },
  avatarImage: {
    marginRight: 6,
    height: width * 0.3,
    width: width * 0.3,

    borderRadius: 200,
  },
  image: {
    flex: 1,
  },
  coverImageAvatar: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
  textNameBottomAvatar: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailBottomAvatar: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.5,
    margin: 2,
  },
  coverView1: {flex: 0.3},
  view1: {
    flex: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 50,
    margin: 15,
  },
  coverInfoPersonalContainer: {flex: 0.52},
  viewTextInfoPersonal: {flex: 0.12, margin: 5},
  textInfoPersonal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },
  coverInfoPersonal: {
    marginHorizontal: 15,
    flex: 0.8,
    borderColor: Colors.grey,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  coverItemInfo: {
    flex: 0.25,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverNameInfo: {
    flex: 0.3,
    justifyContent: 'center',
    marginLeft: 5,
  },
  textNameInfo: {fontSize: 20, fontWeight: 'normal', opacity: 0.7},
  coverInfo: {
    flex: 0.7,
    marginLeft: 5,
    justifyContent: 'center',
  },
  textInfo: {fontSize: 20, fontWeight: 'bold'},
});
