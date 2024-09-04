import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../component/Navbar'

const Categories = () => {
    const navigation = useNavigation();

  const categories = [
    { name: "Women's", image: require('../assets/image1.png') },
    { name: "Men's", image: require('../assets/image2.png') },
    { name: "Kids Wear", image: require('../assets/image3.png') },
    { name: "Ethnic Wear", image: require('../assets/image4.png') },
    { name: "Baby & Maternity", image: require('../assets/image5.png') },
    { name: "Luggage & Bags", image: require('../assets/image6.png') },
    { name: "Beauty & Health", image: require('../assets/image7.png') },
    { name: "Electronics", image: require('../assets/image8.png') },
    { name: "Household", image: require('../assets/image7.png') },
    { name: "Home & Kitchen", image: require('../assets/image1.png') },
    { name: "Accessories", image: require('../assets/image2.png') },
    { name: "Household", image: require('../assets/image3.png') },
    { name: "Lawns & Gardens", image: require('../assets/image4.png') },
    { name: "Pet Supplies", image: require('../assets/image5.png') },
    { name: "Sports & Outdoors", image: require('../assets/image6.png') },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Categories"  />
      <ScrollView>
        <View style={styles.grid}>
          {categories.map((category, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                <Image source={category.image} style={styles.image} />
              </TouchableOpacity> 
              <View style={styles.labelContainer}>
                <Text style={styles.text}>{category.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
  },
  item: {
    width: '32%',
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  labelContainer: {
    backgroundColor: '#FFDF4A',
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: "black",
  },
});

export default Categories;