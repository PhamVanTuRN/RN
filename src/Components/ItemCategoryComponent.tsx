import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '@/Screens/DrawerMenu/HomeScreen/HomeScreenStyle';
import { Category } from '@/Types/Product';
// khi nao viet type cho component thi them Props vao.
type CategoryItemProps = {
  item: Category;
  onPress: (item: Category) => void;
};

const ItemCategoryComponent = ({ item, onPress }: CategoryItemProps) => {
  //   ItemProduct = (nam: ProductItemProps) => {
  // const onPressToListProduct = () => {
  //   onPress(item);
  // };
  // const {id, name, image} = item;
  // return (
  //   <TouchableOpacity
  //     key={id}
  //     style={styles.itemCategory}
  //     onPress={onPressToListProduct}>
  //     <View style={styles.coverImage}>
  //       <TouchableOpacity
  //         // key={item.id}
  //         style={styles.imageButton}>
  //         <Image
  //           source={{uri: image.url ?? ''}}
  //           style={styles.image}
  //           resizeMode="cover"
  //         />
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.textBottomImage}>
  //       <Text style={styles.textName}>{name}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );
};

export default ItemCategoryComponent;
