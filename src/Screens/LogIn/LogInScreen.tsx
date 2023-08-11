import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigate, resetScreen } from '@/Navigation/NavigationAction';
import styles from '@/Screens/LogIn/LogInScreenStyle';
import Images from '@/Themes/Images';
import { checkLogIn } from '@/redux/Reducers/AuthReducers';
import { useDispatch } from 'react-redux';
import { StatusLoading } from '@/Constants';

import { useAppSelector } from '@/Hooks/reduxHook';

import { ThunkDispatch } from '@reduxjs/toolkit';

const LogIn = () => {
  const authState = useAppSelector(state => state.authReducer);
  const { statusLoginRequest } = authState;
  const { messageErrorLogIn } = authState;
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isShown, setShown] = useState(true);
  const onPressShown = () => {
    setShown(!isShown);
  };
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const onPressLogIn = () => {
    dispatch(checkLogIn({ email, password }));
  };
  const onPressSignUp = () => {
    resetScreen('SignIn');
  };
  const onPressForgot = () => {
    navigate('RecoverPassword');
  };
  const onChangeTextEmail = (value: string) => {
    onChangeEmail(value);
  };
  const onChangeTextPassword = (value: string) => {
    onChangePassword(value);
  };
  useEffect(() => {
    if (statusLoginRequest === StatusLoading.Successful) {
      resetScreen('HomeStack');
    }
    if (statusLoginRequest === StatusLoading.Fail) {
      Alert.alert('Đăng nhập không thành công', messageErrorLogIn);
    }
  }, [statusLoginRequest]);

  return (
    <SafeAreaView style={styles.keyboardAware}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View style={styles.logoWrap}>
            <Text style={styles.textNameCompany}>QLCV</Text>
            <Image style={styles.imageLogo} source={Images.imageLogo} />
          </View>
          <View style={styles.itemInputLoginWrap}>
            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeTextEmail}
              value={email}
              placeholder="  Email"
            />
          </View>
          <View style={styles.inputPasswordWrap}>
            <View style={styles.inputPasswordLogo}>
              <Image source={Images.imageLock} />
            </View>
            <TextInput
              secureTextEntry={isShown}
              style={styles.textInputPassword}
              onChangeText={onChangeTextPassword}
              value={password}
              placeholder="  Password"
            />
            <TouchableOpacity
              style={styles.buttonEyeWrap}
              onPress={onPressShown}>
              <Image
                style={styles.imageEye}
                source={isShown ? Images.imageEyeClose : Images.imageEyeOpen}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText} onPress={onPressForgot}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin} onPress={onPressLogIn}>
            <Text style={styles.buttonLoginText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.viewLine}>
            <Image source={Images.imageLine} />
            <Text style={styles.textOr}>Or</Text>
            <Image source={Images.imageLine} />
          </View>
          <View style={styles.facebookGoogle}>
            <TouchableOpacity>
              <Image style={styles.image} source={Images.imageGoogle} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={Images.imageFacebook} />
            </TouchableOpacity>
          </View>
          <View style={styles.itemNotAccount}>
            <Text style={styles.textQuestion}>Don't have an account?</Text>
            <TouchableOpacity onPress={onPressSignUp}>
              <Text style={styles.textAnswer}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default LogIn;
