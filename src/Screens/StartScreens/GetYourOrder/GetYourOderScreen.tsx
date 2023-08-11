import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Images from '@/Themes/Images';
import styles from '@/Screens/StartScreens/GetYourOrder/GetYourOderScreenStyle';
import { resetScreen } from '@/Navigation/NavigationAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDataStorage } from '@/Functions/AsyncStorageFunction';
import { KeyAsyncStorages } from '@/Constants';
import { useDispatch } from 'react-redux';
import { checkAutoLogIn, setAccessToken } from '@/redux/Reducers/AuthReducers';
import { ThunkDispatch } from 'redux-thunk';
import { fetchProductsAsync } from '@/redux/Reducers/ProductReducers';

const GetYourOderScreen = () => {
  const getStart = () => {
    resetScreen('AuthStack');
  };
  const skip = () => {
    resetScreen('HomeStack');
  };
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const autoLogInSetAccessToekn = async () => {
    const accessToken = await getDataStorage(
      KeyAsyncStorages.AccessToken,
      true,
    );
    console.log('{accessToken: accessTokenStorage}', accessToken);
    dispatch(fetchProductsAsync({ accessToken }));
    dispatch(setAccessToken({ accessToken }));
  };
  useEffect(() => {
    // dispatch(checkAutoLogIn());
    // autoLogInSetAccessToekn();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.viewSkip}>
          <View style={styles.viewSkipNumber}>
            <Text style={styles.textSkip}>3/3</Text>
          </View>
          <TouchableOpacity style={styles.borderSkip} onPress={skip}>
            <Text style={styles.textSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageGetYourOrder}>
          <Image source={Images.imageGetYourOrder} />
          <Text style={styles.textName}>Get Your Oder</Text>
          <Text style={styles.text}>Payment is the transfer of money</Text>
          <Text style={styles.text}>
            services in exchange product of Payments
          </Text>
          <Text style={styles.text}>typically made terms agreed</Text>
          <TouchableOpacity style={styles.onPress} onPress={getStart}>
            <Text style={styles.textNext}>Get start</Text>
            <Image style={styles.right1} source={Images.imageRight1} />
            <Image style={styles.right} source={Images.imageRight1} />
            <Image style={styles.right} source={Images.imageRight} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetYourOderScreen;
