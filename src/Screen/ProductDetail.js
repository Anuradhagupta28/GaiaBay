import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, ActivityIndicator ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../component/Navbar';
import { Rating } from 'react-native-ratings';


const API_ENDPOINT = 'https://gaiabay.com/graphql';
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
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



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
  
  const fetchProducts = async () => {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            products(filter: {category_id: {eq: "2"}}) {
              items {
                id
                sku
                name
                price_range {
                  minimum_price {
                    regular_price {
                      value
                      currency
                    }
                  }
                }
                description {
                  html
                }
                small_image {
                  url
                  label
                }
                url_key
              }
              total_count
              page_info {
                current_page
                page_size
                total_pages
              }
            }
          }
        `,
      }),
    });
    const result = await response.json();
    return result.data.products.items;
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      if (fetchedProducts.length > 0) {
        setSelectedProduct(fetchedProducts[0]);
      }
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadProducts}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!selectedProduct) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No products available.</Text>
      </View>
    );
  }

  const renderProductCard = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.small_image.url }} style={styles.productCardImage} />
     <View style={{padding:10,paddingBottom:20}}>
     <Text style={styles.productCardName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
      <View style={{flexDirection:"row",gap:5}}>
      <Text style={styles.productCardPrice}>
        ${item.price_range.minimum_price.regular_price.value.toFixed(2)}
     
      </Text>
      <Text style={styles.productCardOriginalPrice}>$00.00</Text>
      <TouchableOpacity style={styles.productCardButton}>
        <Text style={styles.productCardButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      </View>
     </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Navbar showLogo={true} />
      <ScrollView>
        <Image
          source={{ uri: selectedProduct.small_image.url }}
          style={styles.productImage}
        />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{selectedProduct.name}</Text>
         
          <View style={styles.priceContainer}>
          <Text style={styles.price}> ${selectedProduct.price_range.minimum_price.regular_price.value.toFixed(2)}  </Text>
          <Text style={styles.originalPrice}>$00.00</Text>
          <Text style={styles.discount}>(00% off)</Text></View>
  <View style={styles.storeInfo}>
            <Text style={{color:'black'}} >Store Name : <Text style={{color:'grey'}}>Null</Text></Text>
            <Text style={{color:'black'}} >Status : <Text style={{color:'grey'}}>Null in stock</Text></Text>
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
          {/* <Text style={styles.description}>{selectedProduct.description.html}</Text> */}

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
            <Text style={[styles.reviewText,{color:"#000"}]}>lorem ipsum dolor sit amet, consectetur ,ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut nibh eget ligula faucibus malesuada. Morbi facilisis. Nulla est velit, vulputate eget congue vel, accumsan vel nunc. Aliquam blandit, justo vel congue blandit, nunc lectus luctus velit, ac venenatis turpis nisi quis erat. Nulla
            </Text>

       </View>

       <TouchableOpacity style={styles.writeReviewButton} onPress={() => setShowReviewForm(true)}>
       <Image source={require('../assets/icon.png')} style={{width:20, height:20, resizeMode:"contain"}}/>
          <Text style={styles.writeReviewButtonText}>Write a review</Text>
        </TouchableOpacity>
          </View>
          
          <View style={styles.recommendedProducts}>
          <FlatList
            data={products}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.recommendedProductsRow}
          />
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
    color: "black",
  },
  priceContainer:{
flexDirection: "row",
gap: 10,
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
     
    borderTopWidth: 1,
    borderColor: '#D8D8D9',
    paddingTop: 20,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#FFDF4A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
 
  recommendedProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  recommendedProductsRow: {
    justifyContent: 'space-between',
  },
  productCard: {

   
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 3,
      // padding: 10,
    marginBottom: 20,
    width: '48%', 
    elevation: 5,
  
    backgroundColor: '#fff',
   
  },
  productCardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 3,
    marginBottom: 5,
  },
  productCardName: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
   paddingBottom: 5,
   
  },
  productCardPrice: {
   
    fontWeight: 'bold',
    color: 'green',
   
  },
   productCardOriginalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 10,
    paddingTop:3
    
  },
  productCardButton: {
      backgroundColor: '#FFDF4A',
    paddingHorizontal: 10,

    borderRadius: 15,
    alignItems: 'center',
    justifyContent:'center',
   
   
  },
  productCardButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductDetail;