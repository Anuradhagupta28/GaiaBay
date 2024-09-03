import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ title, showLogo = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topbar}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        {showLogo ? (
          <Image 
            source={require('../assets/Logo.png')}
            style={styles.logo}
          />
        ) : (
          <Text style={styles.heading}>{title}</Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/noti2.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/wishlist2.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={require('../assets/cart2.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDF4A',
    padding: 15,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 15,
    height: 11,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  logo: {
    width: 100,
    height: 25,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});

export default Navbar;