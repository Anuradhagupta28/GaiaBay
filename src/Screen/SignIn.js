import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, StyleSheet, SafeAreaView, Image, StatusBar,  } from 'react-native';

import FloatingLabelInput from '../component/FloatingLabelInput';
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <View style={styles.header}>
      <Image source={require('../assets/Logo.png')}
                    style={{ width: 136, height: 34, }}
                />
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View style={styles.iconCircle}>
            <Image source={require('../assets/truck.png')} style={styles.icon} />
          </View>
          <Text style={styles.infoText}>Free Shipping</Text>
          <Text style={styles.infoSubText}>special for you</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.iconCircle}>
            <Image source={require('../assets/refresh.png')} style={styles.icon} />
          </View>
          <Text style={styles.infoText}>Free Returns</Text>
          <Text style={styles.infoSubText}>within 30 days</Text>
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Sign In to  <Image source={require('../assets/Logo.png')}style={{ width: 99, height: 25 }}/></Text>
        <Text style={styles.formSubtitle}>Please enter your valid Mobile No.</Text>
        
        <FloatingLabelInput
          label="Mobile No."
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        
        <View style={styles.referralContainer}>
       <View style={styles.heading2}>
       <Text style={styles.referralText}>Enter your referral </Text>
       <Image source={require('../assets/refrral.png')}style={{ width: 15, height: 10 }}/>
       </View>
          <FloatingLabelInput
            label="Referral Code"
            value={referralCode}
            onChangeText={setReferralCode}
          />
        </View>
        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to accept our <Text style={styles.linkText}>Privacy Policy</Text> & <Text style={styles.linkText}>Terms of Service</Text>.
          </Text>
        </View>
        
        <TouchableOpacity style={styles.continueButton}   onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        
        <View style={styles.orContainer} onPress={() => navigation.navigate('OTPScreen')}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLine} />
        </View>
        
            <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://www.google.com/favicon.ico' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://www.apple.com/favicon.ico' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDF4A',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    paddingHorizontal: 45, 
  },
  infoItem: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#FFFFFF80',

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 27,
    height: 23,
    resizeMode: 'contain',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoSubText: {
    fontSize: 12,
    color: '#666',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',
  },
  brandText: {
    color: '#FFDF4A',
  },
  formSubtitle: {
    marginBottom: 20,
    color: '#666',
    fontSize: 15,

  },
  heading2:{
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
 

  referralContainer: {
    marginTop: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  linkText: {
    color: '#FFD700',
  },
  continueButton: {
    backgroundColor: '#FFDF4A',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:"black",
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});