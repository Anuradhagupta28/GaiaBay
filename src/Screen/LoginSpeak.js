import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar,Switch, StyleSheet,SafeAreaView , ScrollView, KeyboardAvoidingView, Platform,Image,Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  return (


<SafeAreaView  style={styles.container}>

        <StatusBar backgroundColor="#684A75" barStyle="dark-content" />

     <ScrollView >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
      <View style={styles.container2}>
      <View style={styles.content2}>
      
         <Image source={ require('../assets/speakLogo.png')} style={styles.image}/>
         </View>
        <View style={styles.content}>
        
          
          <Text style={styles.loginText}>LOGIN OR SIGN UP</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Username, email or phone"
            placeholderTextColor="#676767"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#676767"
            secureTextEntry
          />
          
          <View style={styles.rememberMeContainer}>
            <Text style={styles.rememberMeText}>Remember me on this device</Text>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
            
              trackColor={{ false: "#767577", true: "#3D5A97" }}
              thumbColor={rememberMe ? "#D8DFEB" : "#D8DFEB"}
            />
          </View>
          
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LanguageSelectionScreen')}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <Text style={styles.forgotText}>
            Forgot your login credentials? <Text style={styles.tapToGetIt}>Tap to get it!</Text>
          </Text>
          
         

        </View>
        <View style={styles.createAccountContainer}>
      <View style={styles.backgroundOverlay} />
      <View style={styles.contentContainer}>
        <View style={styles.orCircle}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <Text style={styles.noAccountText}>DON'T HAVE AN ACCOUNT?</Text>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
        

          
          {/* <View style={styles.createAccountContainer}>
           
            <View style={styles.orCircle}>
              <Text style={styles.orText}>OR</Text>
            </View>
            <Text style={styles.noAccountText}>DON'T HAVE AN ACCOUNT?</Text>
            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountButtonText}>CREATE NEW ACCOUNT</Text>
            </TouchableOpacity>
            </View> */}
         
         
    
      </View>
      </KeyboardAvoidingView>
    </ScrollView>
 </SafeAreaView >

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container2:{
    flex: 1,
  
  },
  content: {
   
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 25,
  },
  content2:{
   backgroundColor:'#3D5A97',
              // Ensures the view takes up the available space
   justifyContent: 'center',  // Centers content vertically
   alignItems: 'center',
   paddingVertical:30,
  //  marginBottom:30
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subLogo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  loginText: {
    fontSize: 17,
    // fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#676767",
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 25,
    marginTop: 12,
    // borderWidth: 1,
    // borderColor:'black'
  },
  rememberMeText: {
    color: 'black',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#2C5282',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: 'black',
paddingVertical:20
  },
  tapToGetIt: {
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    
  },


  createAccountContainer: {
    width: '100%',
   height:'50%', // Adjust this value as needed
    backgroundColor: '#A0B4DE',
    paddingBottom: 60,
    alignItems: 'center',
    position: 'relative',
 
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5%',
    backgroundColor: 'white',

  },
  contentContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',

   
  },
  orCircle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    position: 'absolute',
    top: '52%', // Positioned to overlap the background division
    transform: [{ translateY: -95.5 }],
    borderWidth: 7,
    borderColor: '#A0B4DE',
  },
  orText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    
  },
  noAccountText: {
    color: 'white',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 15,
  
  },
  createAccountButton: {
    width: '92%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image:{
    width: '95%',
  
    resizeMode:'contain',
  }
});

export default LoginScreen;