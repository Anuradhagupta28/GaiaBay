import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../component/Navbar'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
   
    <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
    <View style={styles.topbar}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={{color:"#000",fontSize: 20,marginLeft:7,fontWeight:"900"}}>My Profile</Text>
      </View>
      
    </View>
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:12,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../assets/myprfileimage.png')}
            style={{width:70, height:70, resizeMode:"contain", alignSelf:"center"}}
          />
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Rishita Singh</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,}}>matildabrown@mail.com</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() =>{
            navigation.navigate('EditProfile')
        }}>
          <Text style={{color:"rgba(0, 167, 7, 1)", fontSize:13,right:10}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
          <TouchableOpacity>
          <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>My orders</Text>
          </TouchableOpacity>

            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Already have 12 orders</Text>
          </View>
        </View>
        <TouchableOpacity  onPress={()=>{ navigation.navigate('MyOrders')}} >
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Shipping Addresses</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Saved 3 Addresses</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() =>{}}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Payment Methods</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Saved UPI & Cards</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SavedPayments')}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Promocodes</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>You have special promocodes</Text>
          </View>
        </View>
        <TouchableOpacity  onPress={()=>{ navigation.navigate('Promocodes')}}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>My Reviews</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Reviews for 4 items</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>{ navigation.navigate('MyReviews')}}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Settings</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Notifications, Passwords</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>{ navigation.navigate('Setting')}}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",borderRadius:8,marginTop:40,marginHorizontal:10}}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignSelf:"center", marginLeft:10}}>
            <Text style={{color:"rgba(41, 41, 41, 1)", fontSize:15, fontWeight:"500"}}>Log Out</Text>
            <Text style={{color:"#000", fontWeight:"200", fontSize:13,marginTop:8,}}>Deactivate, Delete or Log Out</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() =>{}}>
          <Image source={require('../assets/Shape.png')} 
            style={{width:18,height:18, resizeMode:"contain"}}
          />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0.3, borderColor:"rgba(255, 186, 73, 0.5)", width:"100%", alignSelf:"center", marginTop:20}}></View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFDF4A',
        padding: 15,
      },
      head: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButton: {
        padding: 5,
      },
      backIcon: {
        width: 15,
        height: 11,
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
      },
      logo: {
        width: 100,
        height: 25,
        marginLeft: 10,
      },
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 20,
      },
});

export default Profile;
