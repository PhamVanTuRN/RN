import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from '@/Screens/LogIn/LogInScreenStyle';
import Images from '@/Themes/Images';
import {resetScreen} from '@/Navigation/NavigationAction';
const UpdateInfoScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const back = () => {
    resetScreen('InfoPersenal');
  };

  // const dispatch = useDispatch<AppDispatch>();
  const getPassword = () => {
    // getPassword({email});
  };
  const [name, onChangeName] = useState('');
  const onChangeTextName = (value: string) => {
    onChangeName(value);
  };
  const [email, onChangeEmail] = useState('');
  const onChangeTextEmail = (value: string) => {
    onChangeEmail(value);
  };
  const [adress, onChangeAdress] = useState('');
  const onChangeTextAdress = (value: string) => {
    onChangeAdress(value);
  };
  const [number, onChangeNumber] = useState('');
  const onChangeTextNumber = (value: string) => {
    onChangeNumber(value);
  };

  return (
    <SafeAreaView style={styles.keyboardAware}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View style={styles.coverBack}>
            <TouchableOpacity onPress={back}>
              <Text style={styles.textBack}>Back</Text>
            </TouchableOpacity>

            <Switch
              trackColor={{false: 'navy', true: 'black'}}
              thumbColor={isEnabled ? 'red' : '#f4f3f4'}
              ios_backgroundColor="green"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.logoWrap}>
            <Text style={styles.textNameCompany}>Thay đổi thông tin</Text>
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
              placeholder="  Nhập email sửa"
            />
          </View>
          <View style={styles.itemInputLoginWrap}>
            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeTextName}
              value={name}
              placeholder="  Nhập tên sửa"
            />
          </View>
          <View style={styles.itemInputLoginWrap}>
            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeTextAdress}
              value={adress}
              placeholder="  Nhập địa chỉ sửa"
            />
          </View>
          <View style={styles.itemInputLoginWrap}>
            <View style={styles.inputLoginLogo}>
              <Image source={Images.imageMessage} />
            </View>
            <TextInput
              autoCapitalize="none"
              style={styles.loginTextInput}
              onChangeText={onChangeTextNumber}
              value={number}
              placeholder="  Nhập số điện thoại sửa"
            />
          </View>

          <TouchableOpacity style={styles.buttonLogin} onPress={getPassword}>
            <Text style={styles.buttonLoginText}> Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default UpdateInfoScreen;
