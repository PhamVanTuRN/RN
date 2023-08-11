
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Keyboard,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '@/Screens/DrawerMenu/HomeScreen/HomeScreenStyle';
import Images from '@/Themes/Images';
import { useNavigation } from '@react-navigation/native';
import { ItemProduct, Product } from '@/Types/Product';

// import {callGetUrl} from '@/redux/Reducers/GetListProduct';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/Hooks/reduxHook';
import { AppDispatch } from '@/Types/redux';

import { fetchCategorysAsync } from '@/redux/Reducers/CategoryReducers';
import ItemProductComponent from '@/Components/ItemProductComponent';

import { getDataStorage } from '@/Functions/AsyncStorageFunction';
import { KeyAsyncStorages } from '@/Constants';
import Colors from '@/Themes/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { navigate, resetScreen } from '@/Navigation/NavigationAction';
import { sendCodeToEmail } from '@/redux/Reducers/AuthReducers';

const HomeScreen = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const productState = useAppSelector(state => state.productReducer);
  const { products } = productState;
  const navigation = useNavigation();
  const onPressToCart = (item: Product) => {
    // @ts-ignore
    navigation.navigate('ProductDetail', {
      item: item,
    });
  };

  const [search, setSearch] = useState('');
  const onChangeSearch = (value: string) => {
    setSearch(value);
  };
  const listMenu = () => {
    Keyboard.dismiss();
    // @ts-ignore
    navigation.toggleDrawer();
  };

  const authState = useAppSelector(state => state.authReducer);
  const { email, qrCode, isConfirmed } = authState;
  console.log('email, qrCode', email, qrCode)
  const dispatch = useDispatch<AppDispatch>();
  const refreshATToken = async () => {
    const refreshToken = await getDataStorage(
      KeyAsyncStorages.RefreshToken,
      true,
    );
    const accessToken = await getDataStorage(
      KeyAsyncStorages.AccessToken,
      true,
    );
    const payload = { refreshToken, accessToken }
    dispatch(fetchCategorysAsync(payload));
  }
  const OnpressGetCode = () => {
    dispatch(sendCodeToEmail({ email }));
    setAlertVisible(!alertVisible)
    navigate('VerifyScreen')
  }
  useEffect(() => {
    refreshATToken()
  }, []);
  return (
    <SafeAreaView style={styles.keyboardAware}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={alertVisible}
            onRequestClose={() => setAlertVisible(!alertVisible)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 0.7 }}>
                    {isConfirmed ? <Text style={styles.modalText}>
                      Tài khoản đã xác nhận
                    </Text> : <Text style={styles.modalText}>
                      Xác nhận tài khoản
                    </Text>}
                  </View>
                  <View style={styles.coverViewOK}>
                    <TouchableOpacity
                      style={styles.buttonOk}
                      onPress={() => setAlertVisible(!alertVisible)}>
                      <AntDesign
                        name={isConfirmed ? "checkcircle" : "closecircle"}
                        size={20}
                        color={isConfirmed ? Colors.green : Colors.red}
                        style={styles.iconOK}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ margin: 5, borderWidth: 0.5, height: 0.5, width: '95%' }} />
                <View>
                  {isConfirmed ? null : <Text style={styles.modalTextQuestion}>
                    Tài khoản đã xác nhận:
                  </Text>}
                  <Text style={styles.modalTextQuestion}>
                    - Kết bạn, trao đổi nhóm
                  </Text>
                  <Text style={styles.modalTextQuestion}>
                    - Thông báo công việc sắp hết hạn
                  </Text>
                  <Text style={styles.modalTextQuestion}>
                    - Thêm, quản lý công việc theo nhóm
                  </Text>
                  <Text style={styles.modalTextQuestion}>
                    - Thêm, quản lý công việc theo danh mục
                  </Text>
                  <Text style={styles.modalTextQuestion}>
                    - Và nhiều chức năng hơn nữa ...
                  </Text>
                </View>
                {isConfirmed ? null : <TouchableOpacity style={{ height: 40, width: '100%', marginTop: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.limegreen }} onPress={OnpressGetCode}>
                  <MaterialIcons
                    name="update"
                    size={20}
                    color={Colors.red}
                    style={styles.iconOK}
                  />
                  <Text style={styles.modalText}>
                    Lấy mã xác nhận
                  </Text>
                </TouchableOpacity>}
              </View>
            </View>
          </Modal>
          <View style={styles.viewNotification}>
            <TouchableOpacity onPress={listMenu} style={styles.viewImageList}>
              <Image source={Images.imageList} />
            </TouchableOpacity>
            <View style={styles.Notification}>
              <Image
                style={styles.imageLocation}
                source={Images.imageLocation}
              />
              <Text style={styles.textNotification}> 15/2 New Texas</Text>
            </View>
            <TouchableOpacity onPress={() => setAlertVisible(true)} style={styles.viewMessage}>
              <Image style={styles.iMessage} source={Images.imageIMessage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewImageList}>
              <Image source={Images.imageNotification} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textExplore}> {email}</Text>
          <Text style={styles.textBest}> best Outfits for you</Text>
          <View style={styles.viewSearch}>
            <View style={styles.viewImageList}>
              <Image source={Images.imageSearch} />
            </View>
            <View style={styles.viewTextSearch}>
              <TextInput
                style={styles.textNotification}
                onChangeText={onChangeSearch}
                value={search}
                placeholder=" Search items... "
              />
            </View>
            <View style={styles.viewImageList}>
              <TouchableOpacity style={styles.imageViewSearch}>
                <Image style={styles.imageSearch} source={Images.imageFilter} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.viewNewSee}>
            <View style={styles.viewNew}>
              <Text style={styles.textNew}>New Arrival</Text>
            </View>
            {/* onPress khong yeu cau truyen tham so gi vao ca */}
            <TouchableOpacity style={styles.viewSee}>
              <Text style={styles.textSee}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            {qrCode ? <Image
              style={styles.logo}
              source={{
                uri: `${qrCode}`,
              }}
            /> : null
            }
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
