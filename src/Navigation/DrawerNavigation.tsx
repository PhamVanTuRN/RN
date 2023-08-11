import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '@/Screens/DrawerMenu/FirstScreen/FirstScreen';
import AboutUsScreen from '@/Screens/DrawerMenu/AboutUsScreen/AboutUsScreen';
import ProductDetail from '@/Screens/ProductDetail/ProductDetail';
// import DrawerScreen from '@/Screens/DrawerScreen/DrawerScreen';
import HomeTabNavigation from './TabNavigation';

import UpdateInfoScreen from '@/Screens/DrawerMenu/UpdateInfoScreen/UpdateInfoScreen';
import ProfileScreenTab from '@/Screens/TabScreens/ProfileScreen';
import DrawerScreen from '@/Screens/DrawerScreen/DrawerScreen';
import VerifyScreen from '@/Screens/DrawerMenu/VerifyEmailScreen/VerifyEmailScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      // @ts-ignore
      drawerContent={props => <DrawerScreen {...props} />}
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeTab" component={HomeTabNavigation} />
      <Drawer.Screen name="FirstScreen" component={FirstScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      <Drawer.Screen name="ProductDetail" component={ProductDetail} />
      <Drawer.Screen name="InfoPersenal" component={ProfileScreenTab} />
      <Drawer.Screen name="UpdateInfoScreen" component={UpdateInfoScreen} />
      <Drawer.Screen name="VerifyScreen" component={VerifyScreen} />

    </Drawer.Navigator>
  );
};
export default MyDrawer;
