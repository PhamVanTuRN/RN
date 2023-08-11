import {useAppSelector} from '@/Hooks/reduxHook';
import {resetScreen} from '@/Navigation/NavigationAction';
import Colors from '@/Themes/Colors';
import Images from '@/Themes/Images';
import {User} from '@/Types/user';
import styles from './ProfileScreenStyle';

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Switch,
  TouchableOpacity,
  Text,
  Keyboard,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo';
const image = {
  uri: 'https://wallpaperset.com/w/full/6/b/c/115901.jpg',
};

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const back = () => {
    console.log('user', user);
    console.log('type of user', objUser);
    Keyboard.dismiss();
    // @ts-ignore
    navigation.toggleDrawer();
  };
  const authState = useAppSelector(state => state.authReducer);
  const {user} = authState;
  const objUser: User = JSON.parse(user);
  const threeDots = () => {
    resetScreen('UpdateInfoScreen');
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <View style={styles.imageBackgroundProfile}>
            <ImageBackground
              source={Images.imageBackgrounAvatar}
              resizeMode="stretch"
              style={styles.coverImageAvatar}>
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
              <View style={styles.profile}>
                <View style={styles.coverProfile}>
                  <Text style={styles.textProfile}>Profile</Text>
                </View>
                <TouchableOpacity style={styles.threeDots} onPress={threeDots}>
                  <AntDesign
                    name="dots-three-vertical"
                    color={Colors.black}
                    style={styles.iconThreeDots}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.avatarContainer}>
                <Image style={styles.avatarImage} source={Images.imageVanTu} />
                <Text style={styles.textNameBottomAvatar}>
                  {objUser.fullName}
                </Text>
                <Text style={styles.emailBottomAvatar}>{objUser.email}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.coverView1}>
            <View style={styles.view1} />
          </View>
          <View style={styles.coverInfoPersonalContainer}>
            <View style={styles.viewTextInfoPersonal}>
              <Text style={styles.textInfoPersonal}> Personal information</Text>
            </View>
            <View style={styles.coverInfoPersonal}>
              <View style={styles.coverItemInfo}>
                <View style={styles.coverNameInfo}>
                  <Text style={styles.textNameInfo}>Full name</Text>
                </View>
                <View style={styles.coverInfo}>
                  <Text style={styles.textInfo}>{objUser.fullName}</Text>
                </View>
              </View>
              <View style={styles.coverItemInfo}>
                <View style={styles.coverNameInfo}>
                  <Text style={styles.textNameInfo}>Email</Text>
                </View>
                <View style={styles.coverInfo}>
                  <Text style={styles.textInfo}>{objUser.email}</Text>
                </View>
              </View>
              <View style={styles.coverItemInfo}>
                <View style={styles.coverNameInfo}>
                  <Text style={styles.textNameInfo}>City</Text>
                </View>
                <View style={styles.coverInfo}>
                  <Text style={styles.textInfo}>
                    {objUser.city ? objUser.city : 'Quynh Luu'}
                  </Text>
                </View>
              </View>
              <View style={styles.coverItemInfo}>
                <View style={styles.coverNameInfo}>
                  <Text style={styles.textNameInfo}>Phone number</Text>
                </View>
                <View style={styles.coverInfo}>
                  <Text style={styles.textInfo}>
                    {'(' +
                      objUser.phone.countryCode +
                      ')' +
                      objUser.phone.phoneNumber.replace('0', '')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ProfileScreen;
