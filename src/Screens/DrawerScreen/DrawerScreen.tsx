import {navigate} from '@/Navigation/NavigationAction';
import Images from '@/Themes/Images';
import React, {useState} from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Menu} from '@/Types/Product';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@/Themes/Colors';
import {checkLogOut} from '@/redux/Reducers/AuthReducers';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/Types/redux';
const profile = () => {
  navigate('Profile');
};
type DataMenu = {
  item: Menu;
  index: number;
};

import {DATAMENU} from '@/Data/DataFlatlist/MenuDrawerScreen';
const renderItemMenu = ({item, index}: DataMenu) => {
  return (
    <TouchableOpacity
      key={'keyrenderItemMenu' + item.key + index}
      style={styles.itemMenu}
      onPress={item.onPress}>
      <AntDesign name={item.name} size={25} color={Colors.navy} />
      <Text style={styles.textItemMenu}>{item.text}</Text>
    </TouchableOpacity>
  );
};
export default function DrawerScreen() {
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dispatch = useDispatch<AppDispatch>();
  const logOut = () => {
    dispatch(checkLogOut());
  };
  const [alertVisible, setAlertVisible] = useState(false);
  const agreeDelete = () => {
    setAlertVisible(!alertVisible);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={alertVisible}
          onRequestClose={() => setAlertVisible(!alertVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Bạn chắc chắn muốn xoá user của mình
              </Text>
              <Text style={styles.modalTextQuestion}>
                Chọn OK để xoá hoặc Cancel để quay lại
              </Text>
              <View style={styles.modalContainer}>
                <View style={styles.coverViewOK}>
                  <TouchableOpacity
                    style={styles.buttonOk}
                    onPress={agreeDelete}>
                    <Text style={styles.textOK}> Ok</Text>
                    <AntDesign
                      name="checkcircle"
                      size={25}
                      color={Colors.green}
                      style={styles.iconOK}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.coverViewOK}>
                  <TouchableOpacity
                    style={styles.buttonOk}
                    onPress={() => setAlertVisible(!alertVisible)}>
                    <Text style={styles.textOK}> Cancel</Text>
                    <AntDesign
                      name="closecircle"
                      size={25}
                      color={Colors.red}
                      style={styles.iconOK}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.containerAvatar}>
          <View>
            <TouchableOpacity style={styles.avatarButton} onPress={profile}>
              <Image style={styles.imageAvatar} source={Images.imageVanTu} />
              <View style={styles.coverTextAvatar}>
                <Text style={styles.textNameAvatar}>PHAM VAN TU</Text>
                <Text style={styles.textJobAvatar}>Fashion Designer</Text>
              </View>
              <Image style={styles.imageRight} source={Images.imageRight} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={DATAMENU}
            renderItem={renderItemMenu}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.coverLogOut}>
          <TouchableOpacity onPress={logOut} style={styles.logOutButton}>
            <MaterialCommunityIcons
              name="logout"
              size={25}
              color={'red'}
              style={styles.iconLogOut}
            />
            <Text style={styles.textLogOut}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.coverLogOut}>
          <TouchableOpacity
            onPress={() => setAlertVisible(true)}
            style={styles.logOutButton}>
            <AntDesign
              name="deleteuser"
              size={25}
              color={'red'}
              style={styles.iconLogOut}
            />
            <Text style={styles.textLogOut}>Delete user</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemMenu: {
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textItemMenu: {
    color: Colors.navy,
    margin: 13,
    marginTop: 5,
    fontSize: 16,
  },
  safeAreaView: {flex: 1},
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  container: {flex: 1, margin: 10},
  modalView: {
    width: '90%',
    margin: 10,
    backgroundColor: Colors.white,
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
  textStyle: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },

  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // height: 50,
    // width: 300,
  },
  coverViewOK: {flex: 0.5},
  buttonOk: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textOK: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconOK: {fontWeight: 'bold', fontSize: 25, marginLeft: 5},
  containerAvatar: {
    flex: 0.2,
    justifyContent: 'center',
  },
  avatarButton: {
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageAvatar: {
    marginRight: 6,
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  coverTextAvatar: {marginRight: 6, alignItems: 'center'},
  textNameAvatar: {fontWeight: 'bold', color: Colors.indigo},
  textJobAvatar: {margin: 2, color: Colors.indigo},
  imageRight: {tintColor: 'black'},
  flatlistContainer: {flex: 0.6, flexDirection: 'row'},
  coverLogOut: {flex: 0.2},
  logOutButton: {alignItems: 'center', flexDirection: 'row', padding: 25},
  iconLogOut: {fontWeight: 'bold', fontSize: 30},
  textLogOut: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.red,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
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
  modalTextQuestion: {
    textAlign: 'center',
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
  imageRemove: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    tintColor: 'red',
  },
});
