import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../component/Navbar';


const Categories = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState(null);

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
    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => setSelectedCategory(item.name)}
        >
            <Image source={item.image} style={styles.image} />
            <View style={styles.labelContainer}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderSubcategoryItem = ({ item }) => (
        <TouchableOpacity style={styles.subcategoryItem}  onPress={() =>{
          navigation.navigate('SubCategories')
        }}>
            <Image source={item.image} style={styles.subcategoryIcon} />
            <Text style={styles.subcategoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <Navbar title="Categories" />
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={styles.grid}
            />
            <Modal
                visible={!!selectedCategory}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setSelectedCategory(null)}
            >
                <TouchableWithoutFeedback onPress={() => setSelectedCategory(null)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>{selectedCategory}</Text>
                                <FlatList
                                    data={subcategories}
                                    renderItem={renderSubcategoryItem}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    grid: {
        padding: 12,
    },
    item: {
        width: '32%',
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal: '0.5%',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '80%',
        width: '92%',
        alignSelf:'center'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },
    subcategoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    subcategoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    subcategoryText: {
        fontSize: 16,
        color: 'black',
    },
});

export default Categories;