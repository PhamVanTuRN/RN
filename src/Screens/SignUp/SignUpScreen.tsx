import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigate, resetScreen } from '@/Navigation/NavigationAction';
import styles from '@/Screens/SignUp/SignUpScreenStyle';
import Images from '@/Themes/Images';
import CheckBox from '@react-native-community/checkbox';
import { StatusRequest } from '@/Constants';
import { signUpApi } from '@/Services/AuthenticatorApi';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NamSinh, setNamSinh] = useState('');
  const [isShown, setShown] = useState(true);
  const [agree, setAgree] = useState(false);
  const onPressShown = () => {
    setShown(!isShown);
  };
  const onPressLogIn = () => {
    resetScreen('AuthStack');
  };
  const onPressName = (value: string) => {
    setName(value);
  };
  const onPressEmail = (value: string) => {
    setEmail(value);
  };
  const onPressNamsinh = (value: string) => {
    setNamSinh(value);
  };
  const onPressPassword = (value: string) => {
    setPassword(value);
  };
  const onPressSignUp = async () => {
    const response: any = await signUpApi(name, '', email, password, Number(NamSinh), '', false, '', '');
    console.log('response signUp', response)
    const { data, ok, status } = response;
    if (data && ok && status === StatusRequest.POST) {
      console.log('data.id')
      // check Api successfully or not successfully
      Alert.alert('Đăng ký thành công, xin mời đăng nhập');
      resetScreen('AuthStack');
    } else {
      console.log('data.id', data.message)
      Alert.alert('Đăng ký không thành công', data.message);
    }
  };
  return (
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
            <Image style={styles.imageMessage} source={Images.imageProfile} />
          </View>
          <TextInput
            style={styles.loginTextInput}
            onChangeText={onPressName}
            value={name}
            placeholder="  Họ và tên"
          />
        </View>
        <View style={styles.itemInputLoginWrap}>
          <View style={styles.inputLoginLogo}>
            <Image style={styles.imageMessage} source={Images.imageMessage} />
          </View>
          <TextInput
            style={styles.loginTextInput}
            onChangeText={onPressNamsinh}
            value={NamSinh}
            placeholder="  Năm sinh"
          />
        </View>
        <View style={styles.itemInputLoginWrap}>
          <View style={styles.inputLoginLogo}>
            <Image style={styles.imageMessage} source={Images.imageMessage} />
          </View>
          <TextInput
            style={styles.loginTextInput}
            onChangeText={onPressEmail}
            value={email}
            placeholder="  Email"
          />
        </View>

        <View style={styles.inputPasswordWrap}>
          <View style={styles.inputPasswordLogo}>
            <Image style={styles.imageLock} source={Images.imageLock} />
          </View>
          <TextInput
            secureTextEntry={isShown}
            style={styles.textInputPassword}
            onChangeText={onPressPassword}
            value={password}
            placeholder="  Password"
          />
          <TouchableOpacity style={styles.buttonEyeWrap} onPress={onPressShown}>
            <Image
              style={styles.imageEye}
              source={isShown ? Images.imageEyeClose : Images.imageEyeOpen}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.checkboxWrap}>
          <CheckBox value={agree} onChange={() => setAgree(!agree)} />
          <Text> I accept all the </Text>
          <TouchableOpacity>
            <Text style={styles.textCheckbox}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={onPressSignUp}>
          <Text style={styles.buttonLoginText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.itemNotAccount}>
          <Text style={styles.textQuestion}>Already have an account?</Text>
          <TouchableOpacity onPress={onPressLogIn}>
            <Text style={styles.textAnswer}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignUp;
