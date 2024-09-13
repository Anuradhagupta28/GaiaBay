import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Navbar from '../component/Navbar2';
import { useNavigation } from '@react-navigation/native';
import WalletIcon from 'react-native-vector-icons/Fontisto';
import GiftIcon from 'react-native-vector-icons/MaterialIcons';
import CardIcon from 'react-native-vector-icons/FontAwesome';
import SwiperFlatList from 'react-native-swiper-flatlist';
const { width, height } = Dimensions.get('window');

const images = {
  1: require('../assets/giftCard.png') ,
  2: require('../assets/giftCard.png') ,
  3: require('../assets/giftCard.png') ,
  4: require('../assets/giftCard.png') ,
};

const paymentOptions = [
  { title: 'Gaiabay Wallet', Icon: WalletIcon, iconName: 'wallet', iconSize: 30 },
  { title: 'Gift Cards', Icon: GiftIcon, iconName: 'card-giftcard', iconSize: 35 },
  { title: 'Saved Cards', Icon: CardIcon, iconName: 'credit-card-alt', iconSize: 28 },
];
const giftCards = [
  { id: '1', image: require('../assets/giftCard.png') },
  { id: '2', image: require('../assets/giftCard.png') },
  { id: '3', image: require('../assets/giftCard.png') },
  // Add more gift cards as needed
];

const SavedPayments = () => {
  const [selectedOption, setSelectedOption] = useState('Gaiabay Wallet');
  const navigation = useNavigation()
  const renderPaymentOption = ({ title, Icon, iconName, iconSize }) => {
    const isSelected = selectedOption === title;
    return (
      <TouchableOpacity
        key={title}
        style={[styles.paymentOption, isSelected && styles.selectedPaymentOption]}
        onPress={() => setSelectedOption(title)}
      >
        <View style={[styles.iconContainer, { backgroundColor: isSelected ? '#FFFFFF80' : '#FFBA494D' }]}>
          <Icon name={iconName} size={iconSize} color="black" />
        </View>
        <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderGaiabayWallet = () => (
    <View style={styles.savedCardsSection}>
         <View style={{flexDirection:'row',gap:10}}>
        <Text style={styles.sectionTitle}>Gaiabay Wallet</Text>
        <WalletIcon name="wallet" size={23} color="#FFBA49" />
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
              <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('Wallet')}}>
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
  );

  const renderGiftCards = () => (
    <View style={styles.savedCardsSection}>
   <View style={{flexDirection:'row',gap:10,}}>
        <Text style={styles.sectionTitle}>Gift Cards</Text>
        <GiftIcon name="card-giftcard" size={28} color="#FFBA49" />
        </View>
        <View style={styles.giftCardSection}>
      <Image source={require('../assets/giftCard.png')} style={styles.giftCardImage} />
      {/* <View style={styles.swiperContainer}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={1}
            style={{ borderRadius: 14 }}
          >
            <View style={styles.child}>
              <Image source={images[1]} style={styles.image} />
            </View>
            <View style={styles.child}>
              <Image source={images[2]} style={styles.image} />
            </View>
            <View style={styles.child}>
              <Image source={images[3]} style={styles.image} />
            </View>
            <View style={styles.child}>
              <Image source={images[4]} style={styles.image} />
            </View>
          </SwiperFlatList>
        </View> */}
      <Text style={styles.giftCardText}>Send some love!</Text>
      <Text style={styles.giftCardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      <TouchableOpacity style={styles.sendGiftCardButton}>
        <Text style={styles.sendGiftCardButtonText}>Send Gift Card</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  const renderSavedCards = () => (
    <View style={styles.savedCardsSection}>
       <View style={{flexDirection:'row',gap:10}}>
        <Text style={styles.sectionTitle}>Saved Cards</Text>
        <CardIcon name="credit-card-alt" size={22} color="#FFBA49" />
        </View>
      {['AXIS BANK', 'HDFC BANK'].map((bank, index) => (
        <View key={bank} style={styles.card}>
          <Image source={bank === 'AXIS BANK' ? require('../assets/axisBankLogo.png') : require('../assets/hdfc.png')} style={styles.bankLogo} />
          {bank === 'HDFC BANK' && <Image source={require('../assets/visa.png')} style={styles.visaLogo} />}
          <Text style={styles.cardNumber}>**** **** **** {bank === 'AXIS BANK' ? '6089' : '7589'}</Text>
          <TouchableOpacity style={styles.removeCardButton}>
            <Text style={styles.removeCardButtonText}>REMOVE CARD</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const content = useMemo(() => {
    switch (selectedOption) {
      case 'Gaiabay Wallet': return renderGaiabayWallet();
      case 'Gift Cards': return renderGiftCards();
      case 'Saved Cards': return renderSavedCards();
      default: return null;
    }
  }, [selectedOption]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Saved Payments" />
      <ScrollView>
        <View style={styles.paymentOptions}>
          {paymentOptions.map(renderPaymentOption)}
        </View>
        <View style={styles.progressLine} />
        {content}
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
    padding: wp('4%'),
    marginTop: hp('1%'),
  },
  paymentOption: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFDF4A',
    borderRadius: 10,
    width: wp('29%'),
    padding: wp('4%'),
    marginBottom: hp('1%'),
  },
  selectedPaymentOption: {
    borderColor: '#FFD700',
    backgroundColor: '#FFD700',
  },
  iconContainer: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  optionText: {
    fontSize: wp('3%'),
    color: 'black',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
  progressLine: {
    height: 1,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  // sectionTitle: {
  //   fontSize: wp('5%'),
  //   fontWeight: 'bold',
  //   color: 'black',
  //   marginRight: wp('2%'),
  // },
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

  imageStyle:{
    width: width * 0.14, 
    height: height * 0.08,
    resizeMode: 'contain', 

  },
  
  // New styles for Gift Cards section
  giftCardSection: {
    // padding: wp('1%'),
    alignItems: 'center',
  },
  giftCardImage: {
    width: wp('80%'),
    height: hp('30%'),
    resizeMode: 'contain',
    marginBottom: hp('2%'),
  },
  giftCardText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'black',
  },
  giftCardDescription: {
    fontSize: wp('4%'),
    color: '#999999',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  sendGiftCardButton: {
    backgroundColor: '#FFD700',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('10%'),
    borderRadius: 25,
  },
  sendGiftCardButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },

  // New styles for Saved Cards section
  savedCardsSection: {
    paddingHorizontal: wp('5%'),
    paddingVertical:wp('5%')
  },
  cardContainer: {
    marginTop: hp('2%'),
  },
  card: {
    borderWidth: 1,
    borderColor: '#FFDF4A',
    borderRadius: 10,
    padding: wp('4%'),
    marginBottom: hp('2%'),
  },
  bankLogo: {
    width: wp('20%'),
    height: hp('5%'),
    resizeMode: 'contain',
    marginBottom: hp('1%'),
  },
  visaLogo: {
    position: 'absolute',
    top: hp('2%'),
    right: wp('4%'),
    width: wp('15%'),
    height: hp('3%'),
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: wp('4%'),
    color: 'black',
    marginBottom: hp('1%'),
  },
  removeCardButton: {
    alignSelf: 'flex-start',
  },
  removeCardButtonText: {
    color: 'red',
    fontSize: wp('3.5%'),
  },
  child: {
  
    width: width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
},
swiperContainer: {
  height: 180,
  width: '95%',
  alignSelf: 'center',
  overflow: 'hidden',
  marginBottom:20,


},
});

export default SavedPayments;