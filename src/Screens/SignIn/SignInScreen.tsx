import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate, resetScreen} from '@/Navigation/NavigationAction';
import styles from '@/Screens/SignIn/SignInScreenStyle';
import Images from '@/Themes/Images';
import CheckBox from '@react-native-community/checkbox';
const SignIn = () => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isShown, setShown] = useState(true);
  const [agree, setAgree] = useState(false);
  const onPressShown = () => {
    setShown(!isShown);
  };
  const onPressLogIn = () => {
    navigate('AuthStack');
  };
  const onPressHome = () => {
    resetScreen('Home');
  };
  const onChangeTextName = (value: string) => {
    onChangeName(value);
  };
  const onChangeTextEmail = (value: string) => {
    onChangeEmail(value);
  };
  const onChangeTextPassword = (value: string) => {
    onChangePassword(value);
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
            onChangeText={onChangeTextName}
            value={name}
            placeholder="  Name"
          />
        </View>
        <View style={styles.itemInputLoginWrap}>
          <View style={styles.inputLoginLogo}>
            <Image style={styles.imageMessage} source={Images.imageMessage} />
          </View>
          <TextInput
            style={styles.loginTextInput}
            onChangeText={onChangeTextEmail}
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
            onChangeText={onChangeTextPassword}
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
        <TouchableOpacity style={styles.buttonLogin} onPress={onPressHome}>
          <Text style={styles.buttonLoginText}>Sign in</Text>
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
          <Text style={styles.textQuestion}>Already have an account?</Text>
          <TouchableOpacity onPress={onPressLogIn}>
            <Text style={styles.textAnswer}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignIn;
