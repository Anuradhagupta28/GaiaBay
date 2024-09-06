import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,TextInput ,StatusBar } from 'react-native';
// import { Icon } from '@expo/vector-icons'; // Assuming you're using Expo
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../component/Navbar2';
import { Rating } from 'react-native-ratings';

const RatingReview = ({ onClose, onSubmit }) => {
    const [userRating, setUserRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
  
    const handleSubmitReview = () => {
      onSubmit({ rating: userRating, text: reviewText });
      setUserRating(0);
      setReviewText('');
    };
  
    return (
      <View style={styles.reviewFormContainer}>
          <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
          <Navbar title="Ratings & Reviews"  />
        <View style={styles.reviewForm}>
         
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
          <Text style={styles.reviewFormSubtitle}>Please share your opinion about red short dress</Text>
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

  export default RatingReview;

  const styles = StyleSheet.create({
    reviewFormContainer: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // justifyContent: 'flex-end',
        backgroundColor: 'white',
        height:'100%'
      },
      reviewForm: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
        // paddingTop: '20%',
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
    
    
  })