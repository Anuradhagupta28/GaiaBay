import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import Navbar from '../component/Navbar';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const navigation = useNavigation();

  const data = [
    { id: '1', image: require('../assets/image1.png'), name: 'Wallet', price: '$50', linethruPrice: '$70', description: 'High quality leather wallet.' },
    { id: '2', image: require('../assets/image2.png'), name: 'Wallet', price: '$45', linethruPrice: '$65', description: 'Stylish and durable wallet.' },
    { id: '3', image: require('../assets/image3.png'), name: 'Wallet', price: '$40', linethruPrice: '$60', description: 'Compact and elegant wallet.' },
    { id: '4', image: require('../assets/image4.png'), name: 'Wallet', price: '$55', linethruPrice: '$75', description: 'Premium leather wallet with multiple compartments.' },
    { id: '5', image: require('../assets/image5.png'), name: 'Wallet', price: '$50', linethruPrice: '$70', description: 'High quality leather wallet.' },
    { id: '6', image: require('../assets/image6.png'), name: 'Wallet', price: '$45', linethruPrice: '$65', description: 'Stylish and durable wallet.' },
    { id: '7', image: require('../assets/image7.png'), name: 'Wallet', price: '$40', linethruPrice: '$60', description: 'Compact and elegant wallet.' },
    { id: '8', image: require('../assets/image7.png'), name: 'Wallet', price: '$55', linethruPrice: '$75', description: 'Premium leather wallet with multiple compartments.' },
    { id: '9', image: require('../assets/image1.png'), name: 'Wallet', price: '$50', linethruPrice: '$70', description: 'High quality leather wallet.' },
    { id: '10', image: require('../assets/image2.png'), name: 'Wallet', price: '$45', linethruPrice: '$65', description: 'Stylish and durable wallet.' },
    { id: '11', image: require('../assets/image3.png'), name: 'Wallet', price: '$40', linethruPrice: '$60', description: 'Compact and elegant wallet.' },
    { id: '12', image: require('../assets/image4.png'), name: 'Wallet', price: '$55', linethruPrice: '$75', description: 'Premium leather wallet with multiple compartments.' },
    { id: '13', image: require('../assets/image5.png'), name: 'Wallet', price: '$50', linethruPrice: '$70', description: 'High quality leather wallet.' },
    { id: '14', image: require('../assets/image6.png'), name: 'Wallet', price: '$45', linethruPrice: '$65', description: 'Stylish and durable wallet.' },
    { id: '15', image: require('../assets/image7.png'), name: 'Wallet', price: '$40', linethruPrice: '$60', description: 'Compact and elegant wallet.' },
    { id: '16', image: require('../assets/image6.png'), name: 'Wallet', price: '$55', linethruPrice: '$75', description: 'Premium leather wallet with multiple compartments.' },
  ];

  const ProductItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.description,{right:10}]} numberOfLines={1}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.priceSection}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.linethruPrice}>{item.linethruPrice}</Text>
        </View>
        <TouchableOpacity style={[styles.button,{bottom:5}]}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Wishlist" />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={ProductItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingBottom: 20,
    paddingHorizontal: 10, 
  },
  itemContainer: {
    width: '45%', 
    margin: 10, 
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    justifyContent:"center",
    alignContent:"center",
  },
  firstItem: {
    marginLeft: 20, 
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    fontSize: 12,
    color: '#666',
    
   
    
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "#00A707",
    fontSize: 13,
    fontWeight: "600",
  },
  linethruPrice: {
    color: "#000",
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  button: {
    backgroundColor: '#FFDF4A',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;
