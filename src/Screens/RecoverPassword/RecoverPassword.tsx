import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './RecoverPasswordStyle';
import Images from '@/Themes/Images';
import { resetScreen } from '@/Navigation/NavigationAction';
import { sendCodeGetPassToEmail, sendPassToEmail } from '@/redux/Reducers/AuthReducers';
import { AppDispatch } from '@/Types/redux';
import { useDispatch } from 'react-redux';
const RecoverPassword = () => {
  const dispatch = useDispatch<AppDispatch>();

  const back = () => {
    resetScreen('AuthStack');
  };
  const [email, setEmail] = useState('');
  const [codePassword, setCode] = useState('');
  const getCode = () => {
    dispatch(sendCodeGetPassToEmail(email));
  };
  const getPassword = () => {
    dispatch(sendPassToEmail(codePassword));
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangeCode = (value: string) => {
    setCode(value);
  };
  return (
    <SafeAreaView style={styles.keyboardAware}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={back}>
              <Text style={styles.textBack}>Quay lại </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoWrap}>
            <Text style={styles.textNameCompany}>Lấy lại mật khẩu</Text>
          </View>
          <Text style={styles.textBack}>Bước 1:  </Text>
          <Text >Lấy mã xác nhận yêu cầu lấy lại mật khẩu </Text>

          <View style={styles.itemInputLoginWrap}>

            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeEmail}
              value={email}
              placeholder=" Nhập email đăng ký"
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={getCode}>
            <Text style={styles.buttonLoginText}> Lấy mã xác nhận</Text>
          </TouchableOpacity>
          <Text style={styles.textBack}>Bước 2:  </Text>
          <Text>Nhập mã xác nhận nhận được từ email vào đây</Text>
          <View style={styles.itemInputLoginWrap}>
            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeCode}
              value={codePassword}
              placeholder=" Nhập mã xác nhận"
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={getPassword}>
            <Text style={styles.buttonLoginText}> Lấy mật khẩu mới</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default RecoverPassword;
