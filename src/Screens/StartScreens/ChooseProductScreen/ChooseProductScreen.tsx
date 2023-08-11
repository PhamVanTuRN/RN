import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '@/Themes/Images';
import styles from '@/Screens/StartScreens/ChooseProductScreen/ChooseProductScreenStyle';
import {navigate, resetScreen} from '@/Navigation/NavigationAction';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChooseProductScreen = () => {
  const nextMakePayment = () => {
    navigate('MakePayment');
  };
  const skip = () => {
    resetScreen('HomeStack');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.viewSkip}>
          <View style={styles.viewSkipNumber}>
            <Text style={styles.textSkip}>1/3</Text>
          </View>
          <TouchableOpacity style={styles.borderSkip} onPress={skip}>
            <Text style={styles.textSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageChooseProduct}>
          <Image source={Images.imageChooseProduct} />

          <Text style={styles.textName}>Choose Product</Text>
          <Text style={styles.text}>
            A product is the item offered for sale.
          </Text>
          <Text style={styles.text}>
            A product can be a service oe an item. It can be
          </Text>
          <Text style={styles.text}>physical or in virtual or cyber form.</Text>
          <TouchableOpacity style={styles.onPress} onPress={nextMakePayment}>
            <Text style={styles.textNext}>Next</Text>
            <Image style={styles.right} source={Images.imageRight} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseProductScreen;
