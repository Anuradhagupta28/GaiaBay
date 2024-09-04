import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,TextInput  } from 'react-native';
// import { Icon } from '@expo/vector-icons'; // Assuming you're using Expo
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../component/Navbar';
import { Rating } from 'react-native-ratings';


const ReviewForm = ({ onClose, onSubmit }) => {
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = () => {
    onSubmit({ rating: userRating, text: reviewText });
    setUserRating(0);
    setReviewText('');
  };

  return (
    <View style={styles.reviewFormContainer}>
      <View style={styles.reviewForm}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="times" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.reviewFormTitle}>What is your rate?</Text>
        <Rating
         type='custom'
         ratingCount={5}
         imageSize={40}
         startingValue={userRating}
         onFinishRating={setUserRating}
         style={styles.starRating2}
         ratingColor="#FFA41C"
         
        //  ratingBackgroundColor="#c8c7c8"
        //  tintColor="white"
         readonly={false}
         fractions={0}
      
          
          // style={styles.reviewRating}
        />
        <Text style={styles.reviewFormSubtitle}>Please share your opinion about the product</Text>
        <TextInput
          style={styles.reviewInput}
          multiline
          numberOfLines={4}
          placeholder="Your review"
          value={reviewText}
          onChangeText={setReviewText}
        />
        <TouchableOpacity style={styles.addPhotoButton}>
         
          <Image source={require('../assets/Big.png')} style={{width:40, height:40, resizeMode:"contain"}}/>
         
          <Text style={styles.addPhotoText}>Add your photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitReviewButton} onPress={handleSubmitReview}>
          <Text style={styles.submitReviewButtonText}>Send Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProductDetail = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const ratingData = [
    { rating: 5, count: 12 },
    { rating: 4, count: 5 },
    { rating: 3, count: 4 },
    { rating: 2, count: 2 },
    { rating: 1, count: 0 },
  ];

  const totalRatings = ratingData.reduce((sum, item) => sum + item.count, 0);
  const averageRating = ratingData.reduce((sum, item) => sum + item.rating * item.count, 0) / totalRatings;
  const handleSubmitReview = (reviewData) => {
    console.log('Review submitted:', reviewData);
    setShowReviewForm(false);
  };


  
  return (
    <SafeAreaView style={styles.container}>
       <Navbar  showLogo={true} />
      <ScrollView>
     

        <Image
       source={require('../assets/product.png')}
          style={styles.productImage}
        />

        <View style={styles.productInfo}>
          <Text style={styles.productName}><Text style={{color:'black'}}>KlAMOTTEN </Text>Sexy Honeymoon Bridal Bikini Dress and Babydoll Lingerie B39K</Text>
          <Text style={styles.price}>$9.90 <Text style={styles.originalPrice}>$12.30</Text> <Text style={styles.discount}>(30% off)</Text></Text>
          
          <View style={styles.storeInfo}>
            <Text style={{color:'black'}} >Store Name : <Text style={{color:'grey'}}>KlAMOTTEN</Text></Text>
            <Text style={{color:'black'}} >Status : <Text style={{color:'grey'}}>3 in stock</Text></Text>
          </View>

        
          <Text style={styles.colorOptionsTitle}>Color Options</Text>
          <View style={styles.colorOptions}>
            {['Red', 'Black', 'Pink', 'Maroon', 'White'].map((color, index) => (
              <View key={index} style={styles.colorOption}>
                <Image
                  source={require('../assets/product.png')}
                  style={styles.colorImage}
                />
                <Text style={styles.colorName}>{color}</Text>
              </View>
            ))}
          </View>

          <View style={styles.lowestPriceInfo}>
            {/* <Icon name="home" size={16} color="green" /> */}
            <Text style={styles.lowestPriceText}><Text style={{fontWeight: 'bold'}}>& </Text>Lowest Price in Last 7 Days</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.wishlistButton}>
               <Image source={require('../assets/dilhert.png')} style={{width:20, height:20, resizeMode:"contain"}}/>
              <Text style={styles.wishlistButtonText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
            <Image source={require('../assets/cartbuton.png')} style={{width:20, height:20, resizeMode:"contain"}}/>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsTitle}>Reviews & Ratings</Text>
            <View style={styles.ratingOverview}>
              <View style={styles.ratingScoreContainer}>
                <Text style={styles.ratingScore}>{averageRating.toFixed(1)}</Text>
                <Text style={styles.ratingCount}>{totalRatings} ratings</Text>
              </View>
              <View style={styles.starRatings}>
                {ratingData.map((item) => (
                  <View key={item.rating} style={styles.starRatingRow}>
                    <Rating
                      type='custom'
                      ratingCount={5}
                      imageSize={16}
                      startingValue={item.rating}
                      readonly
                      ratingColor="#FFA41C"
                      // ratingBackgroundColor="#c8c7c8"
                      tintColor="white"
                      style={styles.starRating}
                    />
                    <View style={styles.ratingBar}>
                      <View style={[styles.ratingFill, { width: `${(item.count / totalRatings) * 100}%` }]} />
                    </View>
                    <Text style={styles.ratingCount}>{item.count}</Text>
                  </View>
                ))}
              </View>
            </View>
            <Text style={styles.totalReviews}>Total {totalRatings} Reviews</Text>
            
       <View>
        
     
       <View style={styles.review}>
              <Image source={require('../assets/image1.png')} style={styles.reviewerAvatar} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewerName}>Helene Moore</Text>
             <View style={{display: "flex", flexDirection: "row",justifyContent:'space-between'}}>
             <Rating
              type='custom'
              ratingCount={5}
              imageSize={16}
              startingValue={4}
              readonly
              ratingColor="#FFA41C"
              ratingBackgroundColor="#c8c7c8"
              tintColor="#ffffff"
              style={styles.reviewRating}
            />
                <Text style={styles.reviewDate}>June 5, 2019</Text>
             </View>
              </View>
            </View>
            <Text style={[styles.reviewText,{color:"#000"}]}>The dress is great! Very classy and comfortable & fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.</Text>

       </View>

       <TouchableOpacity style={styles.writeReviewButton} onPress={() => setShowReviewForm(true)}>
       <Image source={require('../assets/icon.png')} style={{width:20, height:20, resizeMode:"contain"}}/>
          <Text style={styles.writeReviewButtonText}>Write a review</Text>
        </TouchableOpacity>
          </View>

          <View style={styles.recommendedProducts}>
          <View style={styles.productCard}>
              <Image source={require('../assets/image2.png')} style={styles.productCardImage} />
              <Text style={styles.productCardName}>Bamboo Straws Pack of 4...</Text>
           <View style={{flexDirection:"row",alignItems:'center'}}>
           <Text style={styles.productCardPrice}>$5.30 <Text style={styles.productCardOriginalPrice}>$13.30</Text></Text>
              <TouchableOpacity style={styles.productCardButton}>
                <Text style={styles.productCardButtonText}>Add to Cart</Text>
              </TouchableOpacity>
           </View>
            </View>
            <View style={styles.productCard}>
              <Image source={require('../assets/image3.png')} style={styles.productCardImage} />
              <Text style={styles.productCardName}>Bamboo Straws Pack of 4...</Text>
           <View style={{flexDirection:"row",alignItems:'center'}}>
           <Text style={styles.productCardPrice}>$5.30 <Text style={styles.productCardOriginalPrice}>$13.30</Text></Text>
              <TouchableOpacity style={styles.productCardButton}>
                <Text style={styles.productCardButtonText}>Add to Cart</Text>
              </TouchableOpacity>
           </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {showReviewForm && (
        <ReviewForm 
          onClose={() => setShowReviewForm(false)}
          onSubmit={handleSubmitReview}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  icon: {
    marginLeft: 15,
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  originalPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  discount: {
    color: 'red',
  },
  storeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
    marginVertical: 10,
  },
  storeInfoText: {
    fontSize: 14,
    color: '#333',
  },
  inStock: {
    color: 'red',
  },
  colorOptionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: "black",
   
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorOption: {
    alignItems: 'center',
  },
  colorImage: {
    width: 60,
    height: 80,
    borderRadius: 5,
  },
  colorName: {
    fontSize: 12,
    marginTop: 5,
    
  },
  lowestPriceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
  
    justifyContent: 'center',
   
    borderRadius: 5,
    marginVertical: 15,
  },
  lowestPriceText: {
    color: 'white',
    marginLeft: 5,
    
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wishlistButton: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    gap:10,
    borderWidth: 1,
    borderColor: '#FFDF4A',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
  },
  wishlistButtonText: {
    color: 'black',
  },
  addToCartButton: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    gap:10,
    backgroundColor: '#FFDF4A',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  reviewsSection: {
    marginTop: 20,
    // backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
  ratingOverview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingScoreContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  ratingScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
  },
  starRatings: {
    flex: 1,
  },
  starRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starRating: {
    alignItems: 'flex-start',
    marginRight: 8,
  },
  ratingBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 8,
  },
  ratingFill: {
    height: '100%',
    backgroundColor: 'red',
  },
  totalReviews: {
    marginTop: 10,
    color: '#666',
    marginBottom:15
  },
  review: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  reviewerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontWeight: 'bold',
    color: "black",
  },
  reviewRating: {
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  reviewDate: {
    color: 'gray',
    fontSize: 12,
  },
  reviewText: {
  fontSize:12
  },
  writeReviewButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     alignSelf: 'flex-end',  
    backgroundColor: '#FFBA49',
    padding: 8,
    borderRadius: 25,
    marginTop: 10,
    elevation:30,
    width:'50%'
  },
  writeReviewButtonText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  recommendedProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 10,
  },
  productCardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productCardName: {
    marginTop: 5,
    fontSize: 14,
    color: "black",
  },
  productCardPrice: {
    fontWeight: 'bold',
    marginTop: 5,
    color: "green",
  },
  productCardOriginalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 10,
    
  },
  productCardButton: {
    backgroundColor: '#FFDF4A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 15,
 
  
  },
  productCardButtonText: {
    fontWeight: 'bold',
    fontSize:10
  },
  
  reviewFormContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  reviewForm: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  reviewFormTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 10,
  },
  reviewFormSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    width: "60%",
    color:'black',
    fontWeight: 'bold',

  },
  starRating: {
    marginVertical: 10,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    height:'30%',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f0f0f0',
  },
  addPhotoButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
   
   
   
    elevation: 2,
    alignSelf:'flex-start'
  },
  cameraIconContainer: {
    backgroundColor: '#FFA41C',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  addPhotoText: {
    color: 'black',
  },
  submitReviewButton: {
    backgroundColor: '#FFDF4A',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  
  },
  submitReviewButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  starRating2: {
    marginVertical: 5,
  },
});

export default ProductDetail;