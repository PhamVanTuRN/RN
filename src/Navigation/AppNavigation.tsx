import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './NavigationAction';
import LogInScreen from '@/Screens/LogIn/LogInScreen';
import SignInScreen from '@/Screens/SignUp/SignUpScreen';
import HomeDrawerNavigation from './DrawerNavigation';
import ChooseProductScreen from '@/Screens/StartScreens/ChooseProductScreen/ChooseProductScreen';
import MakePaymentScreen from '@/Screens/StartScreens/MakePaymentScreen/MakePaymentScreen';
import GetYourOderScreen from '@/Screens/StartScreens/GetYourOrder/GetYourOderScreen';
import RecoverPassword from '@/Screens/RecoverPassword/RecoverPassword';
import ProductDetail from '@/Screens/ProductDetail/ProductDetail';
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="RecoverPassword" component={RecoverPassword} />
    </AuthStack.Navigator>
  );
};
export const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeDrawer" component={HomeDrawerNavigation} />
    </HomeStack.Navigator>
  );
};
export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      // initialRouteName="Splash">
      // <Stack.Screen name="Splash" component={SplashScreen} />
      >
        {/* <Stack.Screen name="ChooseProduct" component={ChooseProductScreen} />
        <Stack.Screen name="MakePayment" component={MakePaymentScreen} /> */}
        <Stack.Screen name="GetYourOder" component={GetYourOderScreen} />
        <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
        <Stack.Screen name="HomeStack" component={HomeStackNavigation} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
