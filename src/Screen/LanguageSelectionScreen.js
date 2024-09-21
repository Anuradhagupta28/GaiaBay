import React, { useState } from 'react';
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
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const languages = [
  { id: '1', name: 'English' },
  { id: '2', name: 'Spanish' },
  { id: '3', name: 'French' },
  { id: '4', name: 'German' },
  { id: '5', name: 'Italian' },
];

const LanguageSelectionScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => {
        setSelectedLanguage(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.languageItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.safeArea}>
      <StatusBar backgroundColor="#684A75" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
        <View style={styles.header}>
      
      <Image source={ require('../assets/speakLogo.png')} style={styles.image}/>
      </View>
          
          <View style={styles.content}>
            <Text style={styles.selectText}>SELECT LANGUAGE</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.dropdownButtonText}>{selectedLanguage.name}</Text>
              <Icon name="down" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('WelcomeScreen')}>
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
          
          <Image
            source={ require('../assets/girl.jpeg')}
            style={styles.bottomimage}
          />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={languages}
              renderItem={renderLanguageItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
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
    backgroundColor:'#3D5A97',
justifyContent: 'center', 
alignItems: 'center',
paddingVertical:30,
  },
  image:{
    width: '95%',
  
    resizeMode:'contain',
  },
  bottomimage:{
    // width: '95%',
//   marginTop:90,
    resizeMode:'contain',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoTextLight: {
    fontWeight: 'normal',
  },
  tagline: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 90,
    alignItems: 'center',
  },
  selectText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
  },
  dropdownButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 15,
    marginBottom: 20,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333333',
    // textAlign: 'center',
  },
  continueButton: {
    width: '100%',
    backgroundColor:'#3D5A97',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems:'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxHeight: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  languageItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  languageItemText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default LanguageSelectionScreen;