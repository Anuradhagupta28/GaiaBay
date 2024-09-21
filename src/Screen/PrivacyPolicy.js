import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Navbar from '../component/Navbar2';
const PrivacyPolicy = () => {
  const [preferencesEnabled, setPreferencesEnabled] = useState(false);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (button) => {
    setActiveButton(button);
    // Here you can add logic to accept or reject all cookies
  };
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
     <Navbar title="Privacy Policy" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Cookie & Preferences</Text>
        <Text >
          You can change your cookie settings to accept or refuse certain cookies and similar technologies below. 
        </Text>
        <Text style={styles.description}>Remember, you can customize your cookie settings at any time in your privacy settings. We do not collect cookies for tracking purposes on iOS App. To learn more about the cookies we use, see our Cookie and Similar Technologies Policy.</Text>
         <TouchableOpacity 
          style={[
            styles.acceptButton, 
            activeButton === 'accept' && styles.activeAcceptButton
          ]}
          onPress={() => handleButtonPress('accept')}
        >
          <Text style={[
            styles.buttonText,
            activeButton === 'accept' && styles.activeButtonText
          ]}>Accept all</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.rejectButton,
            activeButton === 'reject' && styles.activeRejectButton
          ]}
          onPress={() => handleButtonPress('reject')}
        >
          <Text style={[
            styles.rejectButtonText,
            activeButton === 'reject' && styles.activeButtonText
          ]}>Reject all</Text>
        </TouchableOpacity>
        
        <View style={styles.cookieSection}>
        <View style={{flexDirection: "row",gap:5}}> 
         <Icon name="plus" size={22} color="#FFBA49" />
         <Text style={styles.title}> Strictly necessary cookies</Text>
         </View>
      
          <Text style={styles.sectionDescription}>
            These cookies are strictly necessary for our site to work properly and to provide you with our services and features. For instance, they help us to ensure our services work, to authenticate users logging in, to analyze how our customers use our site, to improve both its functionality and your shopping experience, and to enable accessibility. To learn more about these cookies, see our Cookie and Similar Technologies Policy.
          </Text>
        </View>
        
        <View style={styles.toggleSection}>
        <View style={{flexDirection: "row",gap:10}}> 
         <Icon name="plus" size={22} color="#FFBA49" />
         <Text style={styles.toggleText}>Preferences Cookies</Text>
         </View>
          
          <Switch
            value={preferencesEnabled}
            onValueChange={setPreferencesEnabled}
            trackColor={{ false: "#767577", true: "#FFDF4A" }}  
            thumbColor={preferencesEnabled ? "black" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.toggleSection}>
         <View style={{flexDirection: "row",gap:10}}> 
         <Icon name="plus" size={22} color="#FFBA49" />
         <Text style={styles.toggleText}>Advertising Cookies</Text>
         </View>
          <Switch
            value={advertisingEnabled}
            onValueChange={setAdvertisingEnabled}
            trackColor={{ false: "#767577", true: "#FFDF4A" }}
            thumbColor={advertisingEnabled ? "black" : "#f4f3f4"}
          />
        </View>
        <View style={{flexDirection: "row",gap:10}}> 
         <Icon name="plus" size={22} color="#FFBA49" />
         <Text style={styles.title}>Additional privacy options</Text>
         </View>
      
        <Text style={styles.description}>
          You can change your cookie settings to accept or refuse certain cookies and similar technologies below. Remember, you can customize your cookie settings at any time in your privacy settings. We do not collect cookies for tracking purposes on iOS App. To learn more about the cookies we use, see our Cookie and Similar Technologies Policy.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
  description: {
    // fontSize: 13,
   
    marginBottom: 20,
    // color: "#393636",
  },
  acceptButton: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFEB3B',
  
  },
  activeAcceptButton: {
    backgroundColor: '#FFDF4A',
    fontSize: 20,
  },
  rejectButton: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFEB3B',
  },
  activeRejectButton: {
    backgroundColor: '#FFDF4A',
  },
  buttonText: {
    color: 'black',
 
    fontSize: 20,
  },
  rejectButtonText: {
    color: 'black',
    fontSize: 20,
  },
  activeButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cookieSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
  sectionDescription: {
    // fontSize: 13,
    // color: "black",
  },
  toggleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  toggleText: {
    fontSize: 16,
    color: "black",
  
  },
});

export default PrivacyPolicy;