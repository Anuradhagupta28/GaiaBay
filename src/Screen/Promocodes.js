import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList ,StatusBar,ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../component/Navbar2'
const promocodes = [
  { id: '1', discount: '10%',color:'white', type: 'Personal offer', code: 'mypromocode2020', daysRemaining: 6, image: require('../assets/redSquare.png') },
  { id: '2', discount: '15%',color:'black',  type: 'Summer Sale', code: 'summer2020', daysRemaining: 23, image: require('../assets/summerImage.png') },
  { id: '3', discount: '22%',color:'white',  type: 'Personal offer', code: 'mypromocode2020', daysRemaining: 6, image: require('../assets/darkSquare.png') },
];

const PromoCodeItem = ({ item }) => (
  <View style={styles.promoItem}>
    <ImageBackground  source={item.image} style={styles.promoImage} >
    <Text style={{color:item.color,fontSize: wp('5%'), fontWeight: 'bold',}} >{item.discount} off</Text>

    </ImageBackground>
    <View style={styles.promoInfo}>
    
      <Text style={styles.promoType}>{item.type}</Text>
      <Text style={styles.promoCode}>{item.code}</Text>
    </View>
    <View style={styles.promoRight}>
      <Text style={styles.promoDays}>{item.daysRemaining} days remaining</Text>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Promocodes = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
    <Navbar title="Promocodes"  />
      <FlatList
        data={promocodes}
        renderItem={({ item }) => <PromoCodeItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('4%'),
  },
  listContainer: {
    padding: wp('4%'),
  },
  promoItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('2%'),
    // padding: wp('3%'),
    marginBottom: wp('3%'),
    alignItems: 'center',
    borderWidth: 2,
    borderColor:'#FFDF4A'
  },
  promoImage: {
    width: wp('15%'),
    height: wp('18%'),
    borderTopLeftRadius: wp('1.3%'),
    borderBottomLeftRadius: wp('1.3%'),
    overflow: 'hidden',  // Add this line
    justifyContent: 'center',
    alignItems: 'center',

  },
  promoInfo: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  promoDiscount: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
 
    
  },
  promoType: {
    fontSize: wp('3.5%'),
    color: 'black',
    fontWeight: 'bold',
  },
  promoCode: {
    fontSize: wp('3%'),
    color: 'black',
  },
  promoRight: {
    alignItems: 'flex-end',
    padding:10,
  
   
  },
  promoDays: {
    fontSize: wp('2.5%'),
    color: '#999999',
    marginBottom: hp('1%'),
  },
  applyButton: {
    backgroundColor: '#FFBA49',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('6%'),
    borderRadius: wp('5%'),
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
});

export default Promocodes;