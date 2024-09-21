import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions, FlatList, ScrollView, Modal, Button, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import ComStyle from '../component/ComStyle'
import SwiperFlatList from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native';
import BottomTab from '../component/ButtomTab';


const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handlePress = (index) => {
    setSelectedIndex(index);
  };


  const navigation = useNavigation();


  const images = {
    1: require('../assets/timerimage.png'),
    2: require('../assets/swiperimge.jpg'),
    3: require('../assets/swippertopimge.jpg'),
    4: require('../assets/myimage.jpg'),
  };


  const data = [
    { id: '1', image: require('../assets/imagewalletnew.jpg'), name: 'Wallet', price: '$50', linethruPrice: '$70', description: 'High quality leather wallet.' },
    { id: '2', image: require('../assets/walletimge.jpg'), name: 'Wallet', price: '$45', linethruPrice: '$65', description: 'Stylish and durable wallet.' },
    { id: '3', image: require('../assets/walletimge.jpg'), name: 'Wallet', price: '$40', linethruPrice: '$60', description: 'Compact and elegant wallet.' },
    { id: '4', image: require('../assets/walletimge.jpg'), name: 'Wallet', price: '$55', linethruPrice: '$75', description: 'Premium leather wallet with multiple compartments.' },
  ];

  const categories = [
    { id: '1', image: require('../assets/BagsLuggage.jpg'), name: 'Bags & Luggage' },
    { id: '2', image: require('../assets/BabyMaternity.jpg'), name: 'Baby & Maternity' },
    { id: '3', image: require('../assets/Women.jpg'), name: 'Women’s' },
    { id: '4', image: require('../assets/enthinc.jpg'), name: 'Ethnic Wear' },
    { id: '5', image: require('../assets/human1.jpg'), name: 'Men’s' },
    // Add more categories as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainerd}>
      <Image source={item.image} style={styles.imaged} />
      <Text style={styles.named}>{item.name}</Text>
    </View>
  );

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 100) { 
      setModalVisible(true);
    }
  };

  const ProductItem = ({ item, index }) => (
    <View style={[styles.itemContainerr, index === 0 && styles.firstItem]}>
      <Image source={item.image} style={styles.imagee} />
      <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginHorizontal: 10, }}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ color: "#000", fontSize: 13, marginLeft: 10, marginTop: 6, color: "#00A707", fontWeight: "600" }}>{item.price}</Text>
          <Text style={{ color: "#000", marginLeft: 5, marginTop: 6, textDecorationLine: 'line-through', }}>{item.linethruPrice}</Text>

        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View style={[ComStyle.container, styles.mainContainer]}>
     
      
      <View style={{ flex: 1 }}>
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={ComStyle.topbar}>
          <Image source={require('../assets/Logo.png')}
            style={{ width: 133, height: 33, }}
          />
          <View style={{ flexDirection: "row", }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Image source={require('../assets/noti.png')} style={{ width: 20, height: 20, resizeMode: "contain", marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
               navigation.navigate('WishlistScreen')
            }}>
              <Image source={require('../assets/wislist.png')} style={{ width: 20, height: 20, resizeMode: "contain", marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
              navigation.navigate('CartScreen')
            }}>
              <Image source={require('../assets/cart.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
            </TouchableOpacity>


          </View>

        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={ComStyle.searchContainer}>
            <Image source={require('../assets/search.png')} style={ComStyle.searchIcon} />
            <TextInput
              placeholder='Search for Brands & Products'
              placeholderTextColor={"#999999"}
              style={ComStyle.textInput}
            />
            <View style={ComStyle.iconContainer}>
              <TouchableOpacity>
                <Image source={require('../assets/cam.png')} style={ComStyle.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/mic.png')} style={ComStyle.icon} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <View style={[ComStyle.topbar, { width: "90%" }]}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: selectedIndex === 1 ? "#FFDF4A" : "black",
              padding: 5,
              backgroundColor: selectedIndex === 1 ? "#FFDF4A" : null,
              padding: 5,
              borderRadius: 30,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() =>  navigation.navigate('LoginSpeak')}
          >
            <Text style={{ color: selectedIndex == 1 ? "#000" : "#000" }}>Best Sellers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: selectedIndex === 2 ? "#FFDF4A" : "black",
              padding: 5,
              backgroundColor: selectedIndex === 2 ? "#FFDF4A" : null,
              padding: 5,
              borderRadius: 30,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => handlePress(2)}
          >
            <Text style={{ color: selectedIndex == 2 ? "#000" : "#000" }}>New Arrivals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: selectedIndex === 3 ? "#FFDF4A" : "black",
              padding: 5,
              backgroundColor: selectedIndex === 3 ? "#FFDF4A" : null,
              borderRadius: 30,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => handlePress(3)}
          >
            <Text style={{ color: selectedIndex == 3 ? "#000" : "#000" }}>Sales & Offers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: selectedIndex === 4 ? "#FFDF4A" : "black",
              padding: 2,
              backgroundColor: selectedIndex === 4 ? "#FFDF4A" : null,
              padding: 10,
              borderRadius: 50,
            }}
            onPress={() => handlePress(4)}
          >
            <Image
              source={require('../assets/menu.png')}
              style={{ width: 15, height: 15, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.swiperContainer}>
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
        </View>

        <View style={{ backgroundColor: "#FFDF4A", width: "100%", padding: 10, marginTop: 26, }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, }}>
            <Text style={{ color: "#000", fontWeight: "700", lineHeight: 27, fontSize: 18, fontStyle: 'italic' }}>
              Limited Time Deals
            </Text>
            <Text style={{ color: "#292929", fontSize: 12, lineHeight: 18, }}>
              Ends in 02:35:17
            </Text>

          </View>

        </View>
        <View>
          <FlatList

            data={data}
            renderItem={ProductItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={{ color: "#292929", fontSize: 18, fontWeight: "600", lineHeight: 27, }}>Categories</Text>
        </View>
        <View>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <ProductItem item={item} />}
            keyExtractor={item => item.id}
            numColumns={2} 
            columnWrapperStyle={styles.columnWrapper} 
            contentContainerStyle={{ alignItems: "center", paddingBottom: 10, }}
          />
        </View>
        <View style={{ backgroundColor: "#FFC700", padding: 10, borderRadius: 5, width: "90%", alignSelf: "center", marginTop: 15 }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Image source={require('../assets/cab.png')}
              style={{ width: 28, height: 18, resizeMode: "contain", alignSelf: "center", marginRight: 6, }}
            />
            <Text style={{ fontSize: 15, color: "#292929", marginLeft: 6, fontWeight: "500" }}>Free Shipping on all Orders</Text>
          </View>

        </View>
        <View style={{ marginTop: 15, marginLeft: 20 }}>
          <Text style={{ color: "#292929", fontSize: 18, fontWeight: "600", lineHeight: 27, }}>Shop by Interest</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <ProductItem item={item}/>}
            keyExtractor={item => item.id}
            numColumns={2} 

            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={{ alignItems: "center", paddingBottom:50, }}
          />
        </View>

      </ScrollView>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", flex: 1, justifyContent: "center",

      }}>
        <Pressable style={{
           backgroundColor: "rgba(0, 0, 0, 0.0)", width: "100%", flex: 1, justifyContent: "center",
        }} onPress={() =>{
          setModalVisible(false)
        }}>

        <View style={[styles.modalView, { paddingBottom: 20 }]}>
          <Image source={require('../assets/dire.png')}
            style={{ width: 70, height: 68, resizeMode: "contain", alignSelf: "center", marginTop: 10 }}
          />
          <Text style={{ color: "rgba(41, 41, 41, 1)", alignSelf: "center", fontSize: 15, fontWeight: "500", marginTop: 10, }}>Sign In for the Best Experience</Text>

          <TouchableOpacity style={{ width: "90%", borderRadius: 30, padding: 10, alignSelf: "center", backgroundColor: "rgba(255, 223, 74, 1)", marginTop: 20 }}
          onPress={() =>{
            navigation.navigate('SignIn')
            setModalVisible(false)
          }}
          >
            <Text style={{ color: "#292929", fontSize: 18, fontWeight: "600", lineHeight: 27, alignSelf: "center" }}>Sign In</Text>

          </TouchableOpacity>


        </View>
        </Pressable>
      </View>
    </Modal>

        {/* Your main content goes here */}
      </View>
      
      <View style={styles.bottomTabContainer}>
        <BottomTab />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFDF4A',
    width: '90%',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginTop: 15,
    elevation: 3,
    backgroundColor: "#fff"
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    color: "#000"
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 14,
  },
  child: {
    height: 110,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',





  },
  swiperContainer: {
    height: 100, // Adjust this height based on your design needs
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: 20, // This ensures the rounded corners are respected

  },
  itemContainerr: {
    width: 170,
    height: 250,
    marginTop: 20,
    marginHorizontal: 6,
   
    backgroundColor: '#fff',
    borderRadius: 10,


    alignItems: 'center',

    elevation: 2,
  },
  imagee: {
    width: 170,
    height: 165,

    resizeMode: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  price: {
    fontSize: 12,
    color: '#000',
  },
  linethruPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#FFDF4A',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginRight: 7,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  namePriceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  firstItem: {
    marginLeft: 12,
    // Apply left margin to the first item
  },




  listContent: {
    paddingHorizontal: 10, // Padding on the sides of the list
  },
  itemContainerd: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 10,
      // Spacing between items
  },
  imaged: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    // Border color
    borderRadius: 35, // Optional: Rounded corners
  },
  named: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,


  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  mainContainer: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    flex: 1,
  },
  bottomTabContainer: {
    height: 60, // Adjust this to your Bottom Tab height
    backgroundColor: '#fff', // Optional, in case you want a background color
  },


});

export default HomeScreen




      