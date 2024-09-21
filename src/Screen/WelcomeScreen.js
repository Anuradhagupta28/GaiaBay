import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#684A75" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}><Icon name="left" size={18} color="#FFFFFF"/> BACK</Text>
            </TouchableOpacity>
            <Image source={require('../assets/speakLogo.png')} style={styles.logo} />
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>⋮</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.content}>
          <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:10 }}>
          <Text style={styles.welcomeText}>Welcome to Tellme App</Text>
            <Text style={styles.descriptionText}>
             <Text style={{fontWeight:'bold'}}> Sentence Construction Suggestions{'\n'}</Text>
              Elevate your writing with intelligent suggestions for constructing sentences, and receive insightful recommendations for your next creative endeavor.
            </Text>
          </View>
            
            <View style={styles.featureSection}>
              <Text style={styles.featureTitle}>Construct Own Sentence Option</Text>
              <Text style={styles.featureDescription}>
                Seamlessly compose text using the innovative "Type Sentence" feature, making communication effortless and efficient.
              </Text>
            </View>
            
            <View style={styles.featureSection}>
              <Text style={styles.featureTitle}>Convert Sentence to Voice</Text>
              <Text style={styles.featureDescription}>
                Transform your written words into spoken language with "Convert Sentence to Voice" function.
              </Text>
            </View>
            
            <View style={styles.featureSection}>
              <Text style={styles.featureTitle}>Categorized Basic Sentences</Text>
              <Text style={styles.featureDescription}>
                Explore a set of fundamental sentences across various categories such as Food and Drinks, Activities, Feelings, and Medical for expressing yourself in any situation.
              </Text>
            </View>
          </View>
          
          <View style={styles.bottomSection}>
            <Text style={styles.startTypingText}>Start typing what you want to say</Text>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>
                Hello this is Craig. I am calling about the letter I received in the mail concerning my hospital bill
              </Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#684A75',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3D5A97',
    paddingVertical: 10,
    paddingBottom:30,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 14,

  },
  logo: {
    width: width * 0.6,
    height: 65,
    resizeMode: 'cover',
  
  },
  menuButton: {
    padding: 5,
  },
  menuButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center', 
    color:'#676767'
  },
  featureSection: {
    marginBottom: 15,
    borderTopWidth:1,
    borderTopColor:'#D8DFEB',
    paddingTop:10
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black',

    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color:'#676767',
  },
  bottomSection: {
    backgroundColor: '#3D5A97',
    padding: 40,
  },
  startTypingText: {
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 20,
    textAlign:'center'
  },
  inputBox: {
    backgroundColor: '#506DA4',
    borderRadius: 20,
    padding: 19,
    marginBottom: 15,
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 14,
    paddingBottom:10
  },
  callButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#684A75',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;