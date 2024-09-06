import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import Navbar from '../component/Navbar';
import { useNavigation } from '@react-navigation/native';
import ComStyle from '../component/ComStyle'

const CategoryProducts = () => {
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
        <TouchableOpacity style={styles.itemContainer} onPress={()=>{ navigation.navigate('ProductDetail')}}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.description, { right: 10 }]} numberOfLines={1}>{item.description}</Text>
            <View style={styles.priceContainer}>
                <View style={styles.priceSection}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.linethruPrice}>{item.linethruPrice}</Text>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                </TouchableOpacity>
                </View>
              
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <Navbar title="Women’s Tops wear" />
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filter}>
                <Image source={require('../assets/searchOrder.png')} style={styles.icon} />
                    <Text style={{color:'black'}}>Filter</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.filter}>
                <Image source={require('../assets/price.png')} style={styles.icon} />

                    <Text style={{color:'black'}}>Price : Lowest to High</Text></TouchableOpacity>
            </View>
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
        // marginTop:10
    },
    icon: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        
      },
    itemContainer: {
        width: '45%',
        marginHorizontal: 10,
        marginBottom:10,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        justifyContent: "center",
        alignContent: "center",
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
        color: 'black',
        marginTop:5,
        fontWeight:'bold',
        marginHorizontal:10



    },
    priceContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 6,
        marginVertical: 10,
    },
    priceSection: {
        flexDirection: "row",
        
      gap:10,
      justifyContent:'center',
      alignItems:"center"
    },
    price: {
        color: "#00A707",
        fontSize: 13,
        fontWeight: "600",
    },
    linethruPrice: {
        color: "#000",
        fontSize: 10,
        // marginLeft: 5,
        textDecorationLine: 'line-through',
    },
    button: {
        backgroundColor: '#FFDF4A',
        borderRadius: 30,
        paddingVertical: 2,
        paddingHorizontal: 10,
     marginLeft:12
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,
    },
    filter:{
        flexDirection:'row',
        gap:10,
        color:'color',
        backgroundColor:'#EDEDED',
        paddingHorizontal:10,
        paddingVertical:3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    filterContainer:{
        flexDirection:'row',
        gap:10,
        marginTop:10,
        paddingHorizontal:20,
       
        marginBottom:15,

    }
});

export default CategoryProducts;
