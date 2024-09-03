import { View, Text, StatusBar, Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import ComStyle from '../component/ComStyle';

const Splash = () => {
    const navigation = useNavigation();

   
        useEffect(() => {
           
            const timer = setTimeout(() => {
              
              navigation.replace('HomeScreen');
            }, 3000);
        
            
            return () => clearTimeout(timer);
          }, [navigation]);
   
    
  return (
    <View style={ComStyle.container}>
        <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content"  />
       <View style={ComStyle.imagebackground}>
       <Image source={require('../assets/Logo.png')}
                    style={{ width: 133, height: 33, }}
                />
        
        <Text style={{color:"#292929",position:"absolute", bottom:40,}}>The B2C Marketplace</Text>     
       </View>

    </View>
  )
}

export default Splash