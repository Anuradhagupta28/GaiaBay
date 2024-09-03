import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, StyleSheet, SafeAreaView, Image, StatusBar,  } from 'react-native';

import FloatingLabelInput from '../component/FloatingLabelInput';

export default function Otp() {
  const [otp, setOtp] = useState('');

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
        <Text style={styles.formTitle}>OTP Verification  </Text>
        <Text style={styles.formSubtitle}>Otp sent to this 9871234760</Text>
        
        <FloatingLabelInput
          label="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="phone-pad"
        />

        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            OTP will expire in 55 seconds
          </Text>
          <Text>Resend OTP</Text>
        </View>
        
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Verify</Text>
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
    marginTop:-12,
    marginBottom: 25,
    justifyContent: 'space-around',
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

 

});