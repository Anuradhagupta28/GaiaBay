import React,{useState}  from 'react';
import { View, Text, Image, ScrollView, StyleSheet,StatusBar } from 'react-native';
import { Rating } from 'react-native-ratings';
import Navbar from '../component/Navbar2'

const OrderDetail = () => {
  const [userRating, setUserRating] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Order Detail"  />

    <ScrollView >
    <Text style={styles.orderNumber}>Order ID: 1234567890123456</Text>
    <View style={styles.progressLine}  />
      <View style={styles.orderInfo}>
        
       
        <View style={styles.productInfo}>
          <Image 
            source={ require('../assets/image1.png')} 
            style={styles.productImage} 
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Honeymoon Bridal Bikini Dress with cotton fabrics & stylish design</Text>
            <Text style={styles.sellerInfo}>Seller: Detail text</Text>
            <Text style={styles.price}>$9.10 <Text style={styles.priceDetail}>offer applied</Text></Text>
          </View>
        </View>
        
      </View>
      <View style={styles.progressLine}  />
      <View style={styles.statusContainer}>
      <Image 
            source={ require('../assets/delivery.png')} 
            style={styles.deliveryImage} 
          />
        <Text style={styles.statusText}>Items have appeared and reached at the time of delivery</Text>
      </View>
      <View style={styles.timeLinecontainer}>
      <View style={styles.timelineItem}>
        <View style={styles.iconContainer}>
        <View style={styles.checkmark}>
    <View style={styles.checkmarkStem} />
    <View style={styles.checkmarkKick} />
  </View>
        </View>
        <Text style={styles.timelineText}>Order Confirmed, August 22</Text>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.timelineItem}>
        <View style={styles.iconContainer}>
        <View style={styles.checkmark}>
    <View style={styles.checkmarkStem} />
    <View style={styles.checkmarkKick} />
  </View>
        </View>
        <Text style={styles.timelineText}>Delivered, August 27</Text>
      </View>
      </View>
      <View style={styles.progressLine}  />
  
      
     <View style={styles.ratingContainter}>
     <Rating
         type='custom'
         ratingCount={5}
         imageSize={32}
         startingValue={userRating}
         onFinishRating={setUserRating}
         style={styles.starRating2}
         ratingColor="#FFBA49"
         readonly={false}
         fractions={0}
      />
     </View>
     <View style={styles.progressLine}  />
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Shipping Address</Text>
        <Text style={styles.addressText}>Saurabh Singh - Home</Text>
        <Text style={styles.addressText}>302, Krishna Homes-1, Sector 75-A Square Mall, Sahibzada Ajit,</Text>
        <Text style={styles.addressText}>Uttar Pradesh - 201307</Text>
        <Text style={styles.addressText}>7669324035</Text>
      </View>
      <View style={styles.progressLine}  />
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Details</Text>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentVal}>Cart Value</Text>
          <Text style={styles.totalText}>$96.72</Text>
        </View>
        <View style={[styles.paymentRow, styles.totalRow]}>
          <Text style={styles.paymentVal}>Discounted Value</Text>
          <Text style={styles.totalText}>$57.37</Text>
        </View>
        <View style={[styles.paymentRow, styles.totalRow]}>
          <Text style={styles.paymentVal}>Promocode Discount</Text>
          <Text style={styles.totalText}>-15%</Text>
        </View>
        <View style={[styles.paymentRow, styles.totalRow]}>
          <Text style={styles.paymentVal}>Delivery Charges</Text>
          <Text  style={styles.totalText}>Free</Text>
        </View>
        <View style={[styles.paymentRow, styles.totaldotRow]}>
          <Text style={styles.totalText}>Total Payable Amount</Text>
          <Text style={styles.totalAmount}>$48.37</Text>
        </View>
      </View>
      <View style={styles.progressLine}  />
      <View style={styles.similarContainer}>
        <Text style={styles.similarTitle}>Similar Categories</Text>
        <View style={styles.similarProducts}>
          <View style={styles.similarProduct}>
            <Image 
              source={ require('../assets/image2.png')} 
              style={styles.similarProductImage} 
            />
            <Text style={styles.similarProductName}>Tshirt pink colour</Text>
            <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:"center"}}>
           <Text style={styles.similarProductPrice}>$3.30</Text>
           <Text style={styles.similarProductPrice2}>$10.30</Text>
            <View style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </View>
           </View>
          </View>
          <View style={styles.similarProduct}>
            <Image 
              source={ require('../assets/image3.png')} 
              style={styles.similarProductImage} 
            />
            <Text style={styles.similarProductName}>Bamboo straws (Set of 4)</Text>
           <View style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:"center"}}>
           <Text style={styles.similarProductPrice}>$5.30</Text>
           <Text style={styles.similarProductPrice2}>$12.30</Text>
            <View style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </View>
           </View>
          </View>
        </View>
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
  header: {
    backgroundColor: '#FFD700',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderInfo: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
  },
  orderNumber: {
    fontSize: 12,
    color: '#999999',
   alignSelf:'center',
   marginVertical:10
  },
  productInfo: {
    flexDirection: 'row',
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  sellerInfo: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00A707',
  },
  priceDetail: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#00A707',
   
  },
  statusContainer: {
    borderWidth: 1,
    borderColor: '#FFDF4A',
   flexDirection:'row',
   gap: 10,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    
  },
  statusText: {
    fontSize: 13,
    color:'black'
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  timelineText: {
    fontSize: 14,
    color: '#333',
  },
  verticalLine: {
    width: 2,
    height: 20,
    backgroundColor: '#4CAF50',
    marginLeft: 11,
    marginBottom: 8,
  },
  checkmark: {
    width: 12,
    height: 12,
  },
  checkmarkStem: {
    position: 'absolute',
    width: 2,
    height: 9,
    backgroundColor: 'white',
    left: 6,
    top: 1,
    transform: [{ rotate: '45deg' }],
  },
  checkmarkKick: {
    position: 'absolute',
    width: 2,
    height: 5,
    backgroundColor: 'white',
    left: 2,
    top: 6,
    transform: [{ rotate: '-45deg' }],
  },
  viewUpdates: {
    color: 'blue',
    textAlign: 'right',
    padding: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
  },
  addressContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  addressText: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
  },
  paymentContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  
    
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
    marginTop: 8,
  },
  totaldotRow:{
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
    marginTop: 8,
    borderStyle:'dotted'
  },
  totalText: {
    fontWeight: 'bold',
    color:'black'
  },
  similarContainer: {
    // backgroundColor: 'white',
    padding: 16,
  },
  similarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  similarProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  similarProduct: {
    width: '48%',
  },
  similarProductImage: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  similarProductName: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
  },
  similarProductPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'green',
  },
  similarProductPrice2: {
    fontSize: 10,
   
    marginBottom: 4,
    color: 'grey',
     textDecorationLine: 'line-through'
  },

  addToCartButton: {
    backgroundColor: '#FFD700',
    padding: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  addToCartText: {
    fontWeight: 'bold',
    color:'black'
  },
  ratingContainter:{

   paddingVertical: 10,
  },
  deliveryImage:{
height:20,
width:20,
  },
  progressLine: {
 
   borderWidth: 1,
  borderColor: '#cccccc',
    
  },
  timeLinecontainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  paymentVal:{
    color: "black",
  },
  totalAmount:{
    fontWeight: 'bold',
    color: "#00A707",
  }
});

export default OrderDetail;