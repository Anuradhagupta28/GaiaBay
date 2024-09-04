import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screen/Splash'
import HomeScreen from '../Screen/HomeScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from '../Screen/Otp'
import SignIn from '../Screen/SignIn'
import Categories from '../Screen/Categories'
import Cart from '../Screen/Cart'
import Profile from '../Screen/Profile'
import ProductDetail from '../Screen/ProductDetail'
import WishlistScreen from '../Screen/WishlistScreen'
import CartScreen from '../Screen/CartScreen'
import Address from '../Screen/Address'
import OrderSummary from '../Screen/OrderSummary'
import MyProfile from '../Screen/MyProfile'
import EditProfile from '../Screen/EditProfile'
import Notification from '../Screen/Notification'
import OrderTrackingScreen from '../Screen/OrderTrack'
import MyOrders from '../Screen/MyOrders'
import OrderDetail from '../Screen/OrderDetail'
import MyReviews from '../Screen/MyReviews'



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
          name="Home"
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
          name="Cart"
          component={Cart}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="WishlistScreen"
          component={WishlistScreen}
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
         <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown:false}}
        /> 
          <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown:false}}
        /> 
          <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown:false}}
        /> 
          <Stack.Screen
          name="OrderTrackingScreen"
          component={OrderTrackingScreen}
          options={{headerShown:false}}
        /> 
         <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{headerShown:false}}
        /> 
         <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{headerShown:false}}
        /> 
         <Stack.Screen
          name="MyReviews"
          component={MyReviews}
          options={{headerShown:false}}
        /> 
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes