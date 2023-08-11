import {navigate} from '@/Navigation/NavigationAction';
import {addToCart} from '@/redux/Reducers/CartReducers';
import Colors from '@/Themes/Colors';
import {AppDispatch} from '@/Types/redux';

import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ColorsProduct} from '@/Constants/colorsProduct';

import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const ProductDetail = ({route}) => {
  const [colorProduct, setColorProduct] = useState('');
  const [isLike, setIsLike] = useState(false);
  const {item} = route.params;

  const dispatch = useDispatch<AppDispatch>();
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();
  const onPressAddToCart = () => {
    dispatch(addToCart(item));
    navigation.navigate('Order', {
      item: item,
    });
  };
  const back = () => {
    //
    navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={back}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsLike(!isLike);
          }}>
          <AntDesign
            name={isLike ? 'heart' : 'hearto'}
            size={30}
            color={Colors.red}
          />
        </TouchableOpacity>

        <Switch
          trackColor={{false: 'navy', true: 'black'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="green"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.view2}>
        <Image
          source={{uri: item.productRepresent.image.url ?? ''}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.view3}>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            marginTop: 25,
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0.65}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> {item.name}</Text>
          </View>
          <View
            style={{
              flex: 0.35,
              // flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 10,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {item.productRepresent.initPrice.value}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {item.productRepresent.initPrice.currency}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <ScrollView>
            <Text style={{fontSize: 16}}>{item.description}</Text>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.2,

            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <View
            style={{
              flex: 0.3,
            }}>
            <Text style={{fontSize: 14, opacity: 0.5}}>Colors</Text>
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              disabled={colorProduct === ColorsProduct.Green ? true : false}
              onPress={() => {
                setColorProduct(ColorsProduct.Green);
              }}
              style={{
                height: 40,
                width: 40,
                borderWidth: 5,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:
                  colorProduct === 'GREEN' ? Colors.green : Colors.white,
              }}>
              <Entypo name="circle" size={30} color={Colors.green} />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={colorProduct === ColorsProduct.Aqua ? true : false}
              onPress={() => {
                setColorProduct(ColorsProduct.Aqua);
              }}
              style={{
                height: 40,
                width: 40,
                borderWidth: 5,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:
                  colorProduct === ColorsProduct.Aqua
                    ? Colors.aqua
                    : Colors.white,
              }}>
              <Entypo name="circle" size={30} style={{color: Colors.aqua}} />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={colorProduct === ColorsProduct.Black ? true : false}
              onPress={() => {
                setColorProduct(ColorsProduct.Black);
              }}
              style={{
                height: 40,
                width: 40,
                borderWidth: 5,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:
                  colorProduct === ColorsProduct.Black
                    ? Colors.black
                    : Colors.white,
              }}>
              <Entypo name="circle" size={30} style={{color: Colors.black}} />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={
                colorProduct === ColorsProduct.Yellowgreen ? true : false
              }
              onPress={() => {
                setColorProduct(ColorsProduct.Yellowgreen);
              }}
              style={{
                height: 40,
                width: 40,
                borderWidth: 5,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:
                  colorProduct === ColorsProduct.Yellowgreen
                    ? Colors.yellowgreen
                    : Colors.white,
              }}>
              <Entypo
                name="circle"
                size={30}
                style={{color: Colors.yellowgreen}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={onPressAddToCart}
            style={{
              flex: 0.8,
              // height: height * 0.06,
              width: width * 0.8,
              backgroundColor: '#F67952',
              borderRadius: 30,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: Colors.white}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  container: {flex: 1},
  view1: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  view2: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  view3: {
    flex: 0.5,
    marginTop: 40,
    backgroundColor: Colors.white,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginHorizontal: 10,
  },
});
