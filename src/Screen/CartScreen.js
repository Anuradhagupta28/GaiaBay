import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList,StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../component/Navbar'
import { useNavigation } from '@react-navigation/native'

const cartItems = [
  { id: '1', title: "Zara Midi Dress", price: 5.30, oldPrice: 12.30, quantity: 2,image: require('../assets/image1.png') },
  { id: '2', title: "Zara Midi Dress", price: 9.10, oldPrice: 12.30, quantity: 1 ,image: require('../assets/image1.png')},
  { id: '3', title: "Zara Midi Dress", price: 7.00, oldPrice: 12.30, quantity: 3 ,image: require('../assets/image1.png')},
  { id: '4', title: "Zara Midi Dress", price: 7.00, oldPrice: 12.30, quantity: 3 ,image: require('../assets/image1.png')},

];

const CartScreen = () => {
  const navigation = useNavigation();

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={item.image}
        style={styles.itemImage}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.itemOldPrice}>${item.oldPrice.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityBackground}>
          <Icon name="remove" size={wp('4%')} color="grey" />
        </TouchableOpacity>
        <View style={styles.quantityButton}>
          <Text style={styles.quantityText}>{item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.quantityBackground}>
          <Icon name="add" size={wp('4%')} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotal = () => {
    const cartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedValue = cartValue * 0.6; // Assuming a 40% discount
    const promocodeDiscount = 12;
    const totalValue = discountedValue - promocodeDiscount;

    return {
      cartValue: cartValue.toFixed(2),
      discountedValue: discountedValue.toFixed(2),
      promocodeDiscount: promocodeDiscount.toFixed(2),
      totalValue: totalValue.toFixed(2),
    };
  };

  const totals = calculateTotal();

  return (
    <View style={styles.container}>
   
       <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
       <Navbar title="Cart"  />
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />
      
      <View style={styles.promoCodeContainer}>
        <TextInput
          style={styles.promoCodeInput}
          placeholder="Enter Your Promo Code"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.promoCodeButton}>
          <Icon name="arrow-forward" size={wp('5%')} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow1}>
          <Text style={styles.cartHead}>Cart Value</Text>
          <Text  style={styles.cartVal}>${totals.cartValue}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Discounted Value</Text>
          <Text style={styles.cartVal}>${totals.discountedValue}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Promocode Discount</Text>
          <Text style={styles.cartVal}>${totals.promocodeDiscount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Delivery Charges</Text>
          <Text style={styles.cartVal}>Free</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total Value</Text>
          <Text style={styles.totalPrice}>${totals.totalValue}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Address')}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  scrollView: {
    paddingBottom: hp('2%'),
    paddingTop: hp('2%'),
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: hp('2%'),
    padding: wp('1%'),
    borderRadius: wp('2%'),
    marginHorizontal: wp('4%'),
    alignItems: 'center',
    borderWidth: 1, 
    borderColor:'orange'
  },
  itemImage: {
    width: wp('20%'),
    height: wp('25%'),
    borderRadius: wp('2%'),
  },
  itemDetails: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  itemTitle: {
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
    color: 'black',
  },
  itemDescription: {
    fontSize: wp('2.5%'),
    color: 'black',
    marginBottom: hp('0.5%'),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#32CD32',
  },
  itemOldPrice: {
    fontSize: wp('3%'),
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: wp('2%'),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    right: wp('3%'),
    bottom: hp('1%'),
    backgroundColor: '#FFBA49',
    borderRadius: wp('1%'),
   
   
  },
  quantityButton: {
    padding: wp('1%'),
    
  },
  quantityBackground: {
    backgroundColor: '#FFF7E6',
    borderRadius: wp('4%'),
    width: wp('4%'),
    height: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  quantityText: {
    fontSize: wp('3.5%'),
    color: 'black',
    fontWeight: 'bold',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: wp('10%'),
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  promoCodeInput: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('3.5%'),
    color: '#333',
  },
  promoCodeButton: {
    backgroundColor: '#FFBA49',
    padding: wp('3%'),
    borderRadius: wp('10%'),
    marginRight: wp('0.5%'),
  },
  summaryContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginHorizontal: wp('4%'),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
      borderTopWidth: 0.4,
    borderTopColor: 'grey',
    paddingTop: hp('1%'),
  },
  summaryRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
   
  },
  totalRow: {
    borderTopWidth: 1,
    
    marginTop: hp('1%'),
  },
  totalText: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontWeight: 'bold',
    color: '#00A707',
  },
  checkoutButton: {
    backgroundColor: '#FFDF4A',
    padding: wp('4%'),
    alignItems: 'center',
    margin: wp('4%'),
    borderRadius: wp('10%'),
  },
  checkoutButtonText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: 'black',
  },
  cartHead:{
    color: 'black',
  },
  cartVal:{
    color: 'black',
    fontWeight: "bold",
  }
});

export default CartScreen;