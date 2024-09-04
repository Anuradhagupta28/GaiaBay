import React,{useState} from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView ,StatusBar} from 'react-native';
// import { Star, ChevronLeft, ArrowRight, SlidersHorizontal } from 'lucide-react';
import ComStyle from '../component/ComStyle'
import Navbar from '../component/Navbar2'
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const orderData = [
  {
    id: '1',
    image: require('../assets/image1.png'),
    deliveryDate: '27 August',
    productName: 'Honeymoon Bridal Bikini Dress with cotton...',
    rating: 3,
  },
  {
    id: '2',
    image: require('../assets/image2.png'),
    deliveryDate: '19 August',
    productName: 'Bamboo Straws Pack of 4 Aesthetic look...',
    rating: 2,
  },
  {
    id: '3',
    image: require('../assets/image3.png'),
    deliveryDate: '14 August',
    productName: 'Astro Designer Sweaters for women...',
    rating: 4,
  },
  {
    id: '4',
    image: require('../assets/image1.png'),
    deliveryDate: '27 August',
    productName: 'Honeymoon Bridal Bikini Dress with cotton...',
    rating: 3,
  },
  {
    id: '5',
    image: require('../assets/image2.png'),
    deliveryDate: '19 August',
    productName: 'Bamboo Straws Pack of 4 Aesthetic look...',
    rating: 2,
  },
  {
    id: '6',
    image: require('../assets/image3.png'),
    deliveryDate: '14 August',
    productName: 'Astro Designer Sweaters for women...',
    rating: 4,
  },
];

const MyOrders = () => {
  const [userRating, setUserRating] = useState(0);
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem} onPress={() => navigation.navigate('OrderDetail')}>
      <Image source={ item.image } style={styles.productImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.deliveryDate}>Delivered on {item.deliveryDate}</Text>
        <Text numberOfLines={1} style={styles.productName}>{item.productName}</Text>
        <View style={styles.ratingContainer}>
        <Rating
         type='custom'
         ratingCount={5}
         imageSize={20}
         startingValue={userRating}
         onFinishRating={setUserRating}
         style={styles.starRating2}
         ratingColor="#FFBA49"
         readonly={false}
         fractions={0}
      />
        </View>
        <Text style={styles.rateText}>Rate this product now</Text>

      </View>
      {/* <ArrowRight size={20} color="#000" /> */}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
     <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
     <Navbar title="My Orders"  />
     
   <View style={{}}>
   <View style={styles.searchContainer}>
            <Image source={require('../assets/search.png')} style={ComStyle.searchIcon} />
            <TextInput
              placeholder='Search for Brands & Products'
              placeholderTextColor={"#999999"}
              style={ComStyle.textInput}
            />
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image source={require('../assets/searchOrder.png')} style={ComStyle.icon} />
              </TouchableOpacity>
             

            </View>
      </View>
   </View>
      <FlatList
        data={orderData}
        renderItem={renderItem}
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
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
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
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  filterButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
  },
  orderItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFBA49',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  orderDetails: {
    flex: 1,
  },
  deliveryDate: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 14,
    
    marginBottom: 4,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateText: {
    fontSize: 12,
    color: '#999999',
    
  },
  iconContainer:{
    borderLeftWidth: 1,
    borderLeftColor:'black',
    padding:10
  },
  starRating2: {
    marginVertical: 5,
  
  },
});

export default MyOrders;