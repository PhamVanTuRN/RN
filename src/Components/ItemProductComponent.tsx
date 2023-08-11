import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Product} from '@/Types/Product';
// khi nao viet type cho component thi them Props vao.
type ProductItemProps = {
  item: Product;
  onPressToCart: (item: Product) => void;
};
const {width} = Dimensions.get('window');
const ItemProductComponent = ({item, onPressToCart}: ProductItemProps) => {
  //   ItemProduct = (nam: ProductItemProps) => {
  const onPress = () => {
    onPressToCart(item);
  };
  const {id, productRepresent} = item;
  return (
    <View
      // key={nam.item.id}

      key={id}
      style={style.container}>
      <View style={style.coverImage}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{uri: productRepresent.image.url ?? ''}}
            style={style.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
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
  );
};

export default ItemProductComponent;
const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
  },
  coverImage: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
  },
  textImage: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.5,
  },
  textName: {
    color: 'black',
    marginTop: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {
    color: 'black',
    marginTop: 1,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valuePrice: {
    color: 'black',
    marginTop: 1,
    marginHorizontal: 2,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
