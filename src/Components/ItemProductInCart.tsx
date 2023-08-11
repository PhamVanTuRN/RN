import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Product} from '@/Types/Product';
import Colors from '@/Themes/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Swipeable} from 'react-native-gesture-handler';

// khi nao viet type cho component thi them Props vao.
type ProductItemProps = {
  item: Product;
  onPressToCart: (item: Product) => void;
};
const ItemProductComponent = ({item}: ProductItemProps) => {
  //   ItemProduct = (nam: ProductItemProps) => {
  // const onPress = () => {
  //   onPressToCart(item);
  // };
  const {id, productRepresent} = item;
  const [count, setCount] = useState(0);
  const total = count * item.productRepresent.initPrice.value;

  return (
    <Swipeable>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          margin: 5,
          borderRadius: 15,
        }}>
        <View
          // key={nam.item.id}

          key={id}
          style={style.container}>
          <View style={style.coverImage}>
            <TouchableOpacity>
              <Image
                source={{uri: productRepresent.image.url ?? ''}}
                style={style.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.4}}>
            <View style={style.textImage}>
              <Text style={style.textName}>{item.name}</Text>
              <View style={style.price}>
                <Text style={style.textPrice}>
                  {item.productRepresent.initPrice.value}
                </Text>
                <Text style={style.valuePrice}>
                  {item.productRepresent.initPrice.currency}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 0.35}}>
            <View
              style={{
                flex: 1,
                margin: 5,
                flexDirection: 'row',

                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setCount(count > 1 ? count - 1 : 0);
                }}>
                <AntDesign name="minuscircle" size={30} color={Colors.red} />
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 16, margin: 3}}>
                {count}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}>
                <AntDesign name="pluscircle" size={30} color={Colors.green} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default ItemProductComponent;
const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  textImage: {
    flex: 0.5,
    justifyContent: 'center',
  },
  textName: {
    color: 'black',
    marginTop: 1,
    fontSize: 16,
    opacity: 0.7,
  },
  price: {
    flexDirection: 'row',
    marginTop: 4,
  },
  textPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  valuePrice: {
    marginLeft: 3,
    color: 'black',
    marginHorizontal: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
