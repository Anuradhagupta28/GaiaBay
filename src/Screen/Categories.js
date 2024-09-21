


import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, FlatList, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../component/Navbar';

const Categories = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const fetchCategoryData = async () => {
        const url = 'https://gaiabay.com/graphql';
        const query = `
          {
            categoryList(filters: {ids: {in: ["2"]}}) {
              children_count
              children {
                id
                level
                name
                path
                url_path
                url_key
                image
                description
                children {
                  id
                  level
                  name
                  path
                  url_path
                  url_key
                  image
                  description
                }
              }
            }
          }
        `;
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Cookie': 'PHPSESSID=u3vtrhdk5hhdvab00rf6oj3cj7; private_content_version=98fdd827d17d708f481c3e70ea35eee3'
            },
            body: JSON.stringify({ query })
          });
      
          const result = await response.json();
          return result.data.categoryList[0].children;
        } catch (error) {
          console.error('Error fetching data:', error);
          Alert.alert('Error', 'Failed to fetch category data');
          return [];
        }
    };

    useEffect(() => {
        const loadCategories = async () => {
            setLoading(true);
            const fetchedCategories = await fetchCategoryData();
            setCategories(fetchedCategories);
            setLoading(false);
        };
        loadCategories();
    }, []);

    const renderCategoryItem = useCallback(({ item }) => (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => setSelectedCategory(item)}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.labelContainer}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    ), []);

    const renderSubcategoryItem = useCallback(({ item }) => (
        <TouchableOpacity 
            style={styles.subcategoryItem} 
            onPress={() => {
                navigation.navigate('SubCategories', { subcategory: item })
            }}
        >
            <Image 
                source={{ uri: item.image }} 
                style={styles.subcategoryIcon} 
                defaultSource={require('../assets/top.png')} 
            />
            <Text style={styles.subcategoryText}>{item.name}</Text>
        </TouchableOpacity>
    ), [navigation]);

    if (loading) {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
                <Navbar title="Categories" />
                <View style={styles.loadingContainer}>
                    <Text>Loading categories...</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <Navbar title="Categories" />
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id.toString()}
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
                                <Text style={styles.modalTitle}>{selectedCategory?.name}</Text>
                                <FlatList
                                    data={selectedCategory?.children || []}
                                    renderItem={renderSubcategoryItem}
                                    keyExtractor={(item) => item.id.toString()}
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