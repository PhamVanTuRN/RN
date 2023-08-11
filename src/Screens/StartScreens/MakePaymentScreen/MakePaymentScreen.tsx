import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Images from '@/Themes/Images';
import styles from '@/Screens/StartScreens/MakePaymentScreen/MakePaymentScreenStyle';
import {navigate, resetScreen} from '@/Navigation/NavigationAction';

const MakePaymentScreen = () => {
  const GetYourOder = () => {
    navigate('GetYourOder');
  };
  const skip = () => {
    resetScreen('AuthStack');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.viewSkip}>
          <View style={styles.viewSkipNumber}>
            <Text style={styles.textSkip}>2/3</Text>
          </View>
          <TouchableOpacity style={styles.borderSkip} onPress={skip}>
            <Text style={styles.textSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageMakePayment}>
          <Image source={Images.imageMakePayment} />
          <Text style={styles.textName}>Make Payment</Text>
          <Text style={styles.text}>Payment is the transfer of money</Text>
          <Text style={styles.text}>
            services in exchange product of Payments
          </Text>
          <Text style={styles.text}>typically made terms agreed</Text>
          <TouchableOpacity style={styles.onPress} onPress={GetYourOder}>
            <Text style={styles.textNext}>Next</Text>
            <Image style={styles.right1} source={Images.imageRight1} />
            <Image style={styles.right} source={Images.imageRight} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakePaymentScreen;
