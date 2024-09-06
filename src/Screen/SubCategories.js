import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../component/Navbar2';
import ComStyle from '../component/ComStyle'

const SubCategories = () => {
    const navigation = useNavigation();
  const subcategories = [
    { id: '1', name: 'Tops', image: require('../assets/top.png') },
    { id: '2', name: 'Shirts & Blouses', image: require('../assets/shirts.png') },
    { id: '3', name: 'Cardigans & Sweaters', image: require('../assets/cardigans.png') },
    { id: '4', name: 'Knitwear', image: require('../assets/knitwear.png') },
    { id: '5', name: 'Blazers', image: require('../assets/shirts.png') },
    { id: '6', name: 'Outerwear', image: require('../assets/top.png') },
    { id: '7', name: 'Pants', image: require('../assets/shirts.png') },
    { id: '8', name: 'Jeans', image: require('../assets/cardigans.png') },
    { id: '9', name: 'Shorts', image: require('../assets/knitwear.png') },
    { id: '10', name: 'Skirts', image: require('../assets/shirts.png') },
    { id: '11', name: 'Dresses', image: require('../assets/top.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={()=>{ navigation.navigate('CategoryProducts')}}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
          <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
          <Navbar title="Sub Categories"  />
  
    <SafeAreaView style={styles.safeContainer}>

    
  <View style={styles.searchContainer}>
            <Image source={require('../assets/search.png')} style={ComStyle.searchIcon} />
            <TextInput
              placeholder='Search women’s categories'
              placeholderTextColor={"#999999"}
              style={ComStyle.textInput}
            />
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image source={require('../assets/searchOrder.png')} style={ComStyle.icon} />
              </TouchableOpacity>
             

            </View>
      </View>
   
      <Text style={styles.sectionTitle}>Choose Categories</Text>
      <FlatList
        data={subcategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  safeContainer:{
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#FFDF4A',
    width: '90%',
    borderRadius: 5,
    paddingHorizontal:10,
    marginTop:15,
    elevation:3,
    backgroundColor:"#fff",
    alignSelf:'center'
    
  },
 
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: 'white',
    color:'black'
  },
  listContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
  iconContainer:{
    borderLeftWidth: 1,
    borderLeftColor:'black',
    padding:10
  },
});

export default SubCategories;