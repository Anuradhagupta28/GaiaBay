import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import ComStyle from '../component/ComStyle'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
    return (
        <View style={[ComStyle.container, { backgroundColor: "#fff" }]}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={ComStyle.topbar}>
                <Image source={require('../assets/Logo.png')}
                    style={{ width: 133, height: 33, }}
                />
                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={require('../assets/noti.png')} style={{ width: 20, height: 20, resizeMode: "contain", marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                        <Image source={require('../assets/wislist.png')} style={{ width: 20, height: 20, resizeMode: "contain", marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                        <Image source={require('../assets/cart.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                    </TouchableOpacity>


                </View>

            </View>
            <View style={{alignSelf:"center"}}>
      <View style={ComStyle.searchContainer}>
        <Image source={require('../assets/search.png')} style={ComStyle.searchIcon} />
        <TextInput 
          placeholder='Search for Brands & Products'
          placeholderTextColor={"#999999"}
          style={ComStyle.textInput}
          onFocus={() => navigation.navigate('SignIn')}

        />
        <View style={ComStyle.iconContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/cam.png')} style={ComStyle.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/mic.png')} style={ComStyle.icon} />
          </TouchableOpacity>
          
        </View>
      </View>
    </View>


        </View>
    )
}

const styles = StyleSheet.create({
   
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center', 
      borderWidth: 1,
      borderColor: '#FFDF4A',
      width: '90%',
      borderRadius: 30,
      paddingHorizontal:10,
      marginTop:15,
      elevation:3,
      backgroundColor:"#fff"
    },
    searchIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    textInput: {
      flex: 1,
      marginHorizontal: 10, 
      color:"#000"
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginLeft: 14, 
    },
  });

export default HomeScreen