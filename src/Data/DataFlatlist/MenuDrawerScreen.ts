import {navigate} from '@/Navigation/NavigationAction';

const home = () => {
  // navigate('HomeStack');
  navigate('Home');
};
const FirstScreen = () => {
  navigate('FirstScreen');
};
const ProductDetail = () => {
  navigate('ProductDetail');
};
const InfoPersenal = () => {
  navigate('InfoPersenal');
};
const onPressAboutUs = () => {
  navigate('AboutUs');
};
export const DATAMENU = [
  {
    key: '0',
    text: 'Home',
    name: 'home',
    onPress: home,
  },
  {
    key: '1',
    text: 'FirstScreen',
    name: 'hearto',
    onPress: FirstScreen,
  },
  {
    key: '2',
    text: 'Wallest',
    name: 'wallet',
    onPress: InfoPersenal,
  },
  // {
  //   key: '3',
  //   text: 'ProductDetail',
  //   name: 'shoppingcart',
  //   onPress: ProductDetail,
  // },
  {
    key: '4',
    text: 'About us',
    name: 'infocirlceo',
    onPress: onPressAboutUs,
  },
  {
    key: '5',
    text: 'Privacy policy',
    name: 'lock1',
    onPress: ProductDetail,
  },
  {
    key: '6',
    text: 'Setting',
    name: 'setting',
    onPress: ProductDetail,
  },
];
