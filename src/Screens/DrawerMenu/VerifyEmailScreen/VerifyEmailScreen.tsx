
import {
  View,
  Text,

  TextInput,
  TouchableOpacity,

  SafeAreaView,

} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '@/Screens/DrawerMenu/HomeScreen/HomeScreenStyle';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '@/Themes/Colors';
import { useAppSelector } from '@/Hooks/reduxHook';
import { navigate, resetScreen } from '@/Navigation/NavigationAction';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Types/redux';
import { verifyEmail } from '@/redux/Reducers/AuthReducers';


const VerifyScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [code, setCode] = useState('');
  const onChangeCode = (value: string) => {
    setCode(value);
  };

  const authState = useAppSelector(state => state.authReducer);
  const { email } = authState;
  const onPressSend = () => {
    dispatch(verifyEmail({ code }));
    resetScreen('HomeTab')
  }
  return (
    <SafeAreaView style={styles.keyboardAware}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>

          <Text style={{ fontSize: 16 }}> Mã xác thực của bạn đã được gửi vào email:</Text>
          <Text style={{ fontSize: 16, color: Colors.green }}> {email}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginVertical: 10 }}> Nhập mã xác thực vào đây</Text>
          <View style={styles.viewSearch}>
            <View style={styles.viewTextSearch}>
              <TextInput
                style={styles.textNotification}
                onChangeText={onChangeCode}
                value={code}
                placeholder="Nhập mã... "
              />
            </View>
            <View style={styles.viewImageList}>
              <TouchableOpacity style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                flexDirection: 'row'
              }} onPress={onPressSend}>
                <FontAwesome
                  name="send"
                  size={20}
                  color={Colors.green}
                  style={styles.iconOK}
                />
                <Text style={{ fontSize: 16 }}> Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
};

export default VerifyScreen;
