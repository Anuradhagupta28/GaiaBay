import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screen/Splash'
import HomeScreen from '../Screen/HomeScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Screen/SignIn'
import Otp from '../Screen/Otp'
import Categories from '../Screen/Categories'
import ProductDetail from '../Screen/ProductDetail'
import CartScreen from '../Screen/CartScreen'
import Address from '../Screen/Address'
import OrderSummary from '../Screen/OrderSummary'




const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown:false}}
        />
           <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown:false}}
        />
           <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown:false}}
        />
            <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes