import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView ,StatusBar,Image,Dimensions} from 'react-native';
import Navbar from '../component/Navbar2';
import { useNavigation } from '@react-navigation/native';
import WalletIcon from 'react-native-vector-icons/Fontisto';
import GiftIcon from 'react-native-vector-icons/MaterialIcons';
import CardIcon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window'); 
const SavedPayments = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('null');

    const handleOptionPress = (optionName) => {
      setSelectedOption(optionName);
      navigation.navigate('Wallet');
    };
    
    const renderPaymentOption = (title, IconComponent, iconName, iconSize) => {
      const isSelected = selectedOption === title;
      return (
        <TouchableOpacity
          style={[
            styles.paymentOption,
            isSelected && styles.selectedPaymentOption
          ]}
          onPress={() => handleOptionPress(title)}
        >
          <View style={[
            styles.iconContainer,
            { backgroundColor: isSelected ? '#FFFFFF80' : '#FFBA494D' }
          ]}>
            <IconComponent name={iconName} size={iconSize} color="black" />
          </View>
          <Text style={[
            styles.optionText,
            isSelected && styles.selectedOptionText
          ]}>{title}</Text>
        </TouchableOpacity>
      );
    };
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <Navbar title="Saved Payments" />
      <ScrollView>
       

      <View style={styles.paymentOptions}>
          {renderPaymentOption('Gaiabay Wallet', WalletIcon, 'wallet', 30)}
          {renderPaymentOption('Gift Cards', GiftIcon, 'card-giftcard', 35)}
          {renderPaymentOption('Saved Cards', CardIcon, 'credit-card-alt', 28)}
        </View>
        <View style={styles.progressLine} />
        <View style={styles.walletSection}>
        <View style={{flexDirection:'row',gap:10}}>
        <Text style={styles.sectionTitle}>Gaiabay Wallet</Text>
        <WalletIcon name="wallet" size={20} color="#FFBA49" />
        </View>

          <View style={styles.benefitsContainer}>
            <View style={styles.benefitItem}>
            
              <Image source={require('../assets/ShoppingBag.png') } style={styles.imageStyle}/>
              <Text style={styles.benefitTitle}>INSTANT CHECKOUT</Text>
              <Text style={styles.benefitDescription}>One-click easy and fast checkout</Text>
            </View>
            <View style={styles.benefitItem}>
            <Image source={require('../assets/refund.png')} style={styles.imageStyle}/>
              <Text style={styles.benefitTitle}>FASTER REFUNDS</Text>
              <Text style={styles.benefitDescription}>Get instant refunds as Gaiabay Wallet</Text>
            </View>
            <View style={styles.benefitItem}>
            <Image source={require('../assets/money.png')} style={styles.imageStyle}/>
              <Text style={styles.benefitTitle}>CONSOLIDATED MONEY</Text>
              <Text style={styles.benefitDescription}>Gift cards, refunds and cashbacks in one place</Text>
            </View>
            <View style={styles.benefitItem}>
            <Image source={require('../assets/benefit.png')} style={styles.imageStyle}/>
              <Text style={styles.benefitTitle}>MANY MORE BENEFITS</Text>
              <Text style={styles.benefitDescription}>Benefits and offers on using Gaiabay Wallet</Text>
            </View>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Top-up your Gaiabay Wallet now!</Text>
            <Text style={styles.balanceAmount}>$0.00</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>For a quick checkout</Text>
                <Text style={styles.buttonText2}>TOP UP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText}>Have a Gift Card?</Text>
                <Text style={styles.buttonText2}>ADD GIFT CARD</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.transactionsSection}>
            <Text style={styles.transactionTitle}>Transactions</Text>
            <WalletIcon name="wallet" size={20} color="#FFBA49" />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    marginTop:10,
   
  },
  paymentOption: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFDF4A',
    borderRadius: 10,
width:'31%',
// height:'100%',
padding:16,
    marginBottom: 10,
  },
  selectedPaymentOption: {
    borderColor: '#FFD700',
    backgroundColor: '#FFD700',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 12,
    color:'black'
  },
  walletSection: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'black',
   
  },
  benefitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  benefitItem: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
  },
  benefitTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 8,
    color:'black',
  },
  benefitDescription: {
    fontSize: 13,
    color: '#999999',
    textAlign: 'center',


  },
  balanceContainer: {
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#FFDF4A",
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 14,
    color:'black',
    fontWeight:'bold',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color:'black'
  },
  buttonContainer: {
    flexDirection: 'row',
   width: '100%',
 
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: "#999999",
    padding: 8,
  },
  button: {
 
    paddingHorizontal: 16,
    borderRightWidth: 1,
    borderRightColor: '#000',
    alignItems:'center'
  },
  button2: {
       alignItems:'center',
  paddingHorizontal: 18,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black'
  },
  transactionsSection: {
    marginTop: 24,
    flexDirection:'row',
    justifyContent:'space-between',
   alignItems:'center',
    borderWidth: 2,
    borderColor: "#FFDF4A",
    borderRadius: 5,
    paddingHorizontal: 16,
  paddingVertical:9
  },
  transactionTitle:{
    alignItems:'center',
    fontSize: 15,
    
    
    color:'black',
  },
  progressLine: {
    height: 1,
    borderWidth: 1, 
    borderColor: '#FFD700',
  },
  imageStyle:{
    width: width * 0.14, 
    height: height * 0.08,
    resizeMode: 'contain', 

  }
});

export default SavedPayments;