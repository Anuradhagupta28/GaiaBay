import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,TextInput ,StatusBar } from 'react-native';
// import { Icon } from '@expo/vector-icons'; // Assuming you're using Expo
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../component/Navbar2';
import { Rating } from 'react-native-ratings';

const RatingReviewFull = () => {
   
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
          <ScrollView style={styles.container}>
          <Rating
           type='custom'
           ratingCount={4}
           imageSize={40}
           startingValue={userRating}
           onFinishRating={setUserRating}
           style={styles.starRating2}
           ratingColor="#FFA41C"
           
           ratingBackgroundColor="#FFA41C"
          //  tintColor="white"
           readonly={true}
           fractions={0}
        
            
            // style={styles.reviewRating}
          />
      <Text style={styles.ratingText}>4 star rating</Text>
      
      <Text style={styles.sectionTitle}>Review</Text>
      <Text style={styles.reviewText}>
        I'm super happy with these! I've never bought jeans online before and I didn't think they'd even fit, but it turns out they fit pretty perfectly.
      </Text>
      
      <Text style={styles.sectionTitle}>Review Photos</Text>
      <View style={styles.photoContainer}>
        <Image source={require('../assets/image1.png')} style={styles.photo} />
        <Image source={require('../assets/image1.png')} style={styles.photo} />
        <Image source={require('../assets/image1.png')} style={styles.photo} />
      </View>
    </ScrollView>
      </View>
    );
  };

  export default RatingReviewFull;

  const styles = StyleSheet.create({
    reviewFormContainer: {
       
        backgroundColor: 'white',
        flex:1
      },
      container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
      },
      starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
      },
      star: {
        fontSize: 30,
        marginHorizontal: 2,
      },
      filledStar: {
        color: '#FFD700',
      },
      emptyStar: {
        color: '#D3D3D3',
      },
      ratingText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
        color:'black'
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
          color:'black'
      },
      reviewText: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 24,
          color:'black'
      },
      photoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      photo: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 8,
      },
    
    
  })