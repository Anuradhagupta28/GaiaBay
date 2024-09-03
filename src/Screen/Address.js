

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Navbar from '../component/Navbar';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

const Address = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const navigation = useNavigation();

  const addresses = [
    { id: 1, name: 'Saurabh Singh', type: 'Home', address: '302, Krishna Homes-1, Sector 73, A Square Mall, Sattabad, Noida, Uttar Pradesh - 201307', phone: '7689324035' },
    { id: 2, name: 'Rishabh Singh', type: 'Office', address: '302, Krishna Homes-1, Sector 73, A Square Mall, Sattabad, Noida, Uttar Pradesh - 201307', phone: '8943795890' },
    { id: 3, name: 'Rishabh Singh', type: 'Office', address: '302, Krishna Homes-1, Sector 73, A Square Mall, Sattabad, Noida, Uttar Pradesh - 201307', phone: '8943795890' },
  ];

  const handleAddressSelection = (id) => {
    setSelectedAddress(id);
  };

  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
     <Navbar title="Address"  />
      
     
     <View style={styles.progressBar}>
        {[1, 2, 3].map((step) => (
          <View key={step} style={styles.progressStep}>
            <View style={[styles.progressCircle, step === 1 && styles.activeStep]}>
              <Text style={[styles.progressNumber, step === 1 && styles.activeStepText]}>{step}</Text>
            </View>
            <Text style={styles.progressLabel}>
              {step === 1 ? 'Address' : step === 2 ? 'Order Summary' : 'Payment'}
            </Text>
            {step < 2 && <View style={styles.progressLine} />}
          </View>
        ))}
      </View>

      <ScrollView style={styles.addressList}>
        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={styles.addressItem}
            onPress={() => handleAddressSelection(address.id)}
          >
            <View style={styles.radioButton}>
              {selectedAddress === address.id && <View style={styles.radioButtonInner} />}
            </View>
            <View style={styles.addressDetails}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressName}>{address.name}</Text>
                <Text style={styles.addressType}>{address.type}</Text>
  {selectedAddress === address.id && <TouchableOpacity style={styles.editButton} ><Text style={styles.editText}>Edit</Text></TouchableOpacity>}
              </View>
              <Text style={styles.addressText}>{address.address}</Text>
              <Text style={styles.phoneNumber}>{address.phone}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addNewAddress}>
      <Icon name="pluscircleo" size={24} color="#FFBA49" />
      <Text style={styles.addNewAddressText}>Add a new address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deliverHereButton} onPress={() => navigation.navigate('OrderSummary')}>
        <Text style={styles.deliverHereText}>Deliver Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    backgroundColor: '#FFC107',
  },
  headerTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: wp('4%'),
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderBottomWidth: 2,
    borderBottomColor: '#FFDF4A',
  },
  progressStep: {
    alignItems: 'center',
    flex: 1,
  },
  progressCircle: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('5%'),
    borderWidth: 2,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: hp('1%'),
  },
  activeStep: {
    backgroundColor: '#FFD700',
  },
  progressNumber: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'black',
  },
  activeStepText: {
    color: 'black',
  },
  progressLabel: {
    fontSize: wp('3%'),
    color: '#000',
    textAlign: 'center',
  },
  progressLine: {
    position: 'absolute',
    top: wp('4%'),
    right: -wp('50%'),
    width: wp('65%'),
    height: 1,
    borderStyle: 'dotted', // Make the line dotted
    borderWidth: 1, 
borderColor: '#FFD700',
    zIndex: -1,
  },
  inactiveCircle: {
    backgroundColor: '#E0E0E0',
  },
  inactiveText: {
    color: '#757575',
  },
  inactiveLabel: {
    color: '#757575',
  },
  addressList: {
    flex: 1,
  },
  addressItem: {
    flexDirection: 'row',
    padding: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  radioButton: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
    alignSelf:`center`
  },
  radioButtonInner: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    backgroundColor: '#FFDF4A',
  },
  addressDetails: {
    flex: 1,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items close together
    alignItems: 'center',
    // gap: wp('6%'),
    marginBottom: hp('1%'),
  },
  addressName: {
    fontWeight: 'bold',
    fontSize: wp('4%'),
    color:'black'
  },
  addressType: {
    fontSize: wp('3%'),
    color: 'black',
    backgroundColor:'#F5F5F5',
    paddingHorizontal:wp('2%'),
    marginLeft: hp('1.5%'),
    borderRadius: wp('0.6%'),
    
  },
  editButton: {
  backgroundColor:'#FFDF4A',
  paddingHorizontal:wp('2%'),
  marginLeft: 'auto',
  borderRadius: wp('0.6%'),

  },
  editText: {
    color: 'black',
    fontSize: wp('3%'),
    // fontWeight: 'bold',
  },
  addressText: {
    fontSize: wp('3.5%'),
    marginBottom: hp('0.5%'),
    color: 'black',
  },
  phoneNumber: {
    fontSize: wp('3.5%'),
    color: 'black',
  },
  addNewAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2%'),
    borderWidth: 1,
    borderColor: '#FFDF4A',
    marginHorizontal:'4.5%',
    borderRadius: wp('2%'),
 
  },
  addNewAddressText: {
    marginLeft: wp('2%'),
    color: 'black',
    fontSize: wp('4.2%'),
    fontWeight: 'bold',
  },
  deliverHereButton: {
    backgroundColor: '#FFDF4A',
    padding: wp('3%'),
    alignItems: 'center',
    margin: wp('4%'),
    borderRadius: wp('12%'),
  },
  deliverHereText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp('4.3%'),
  },
});

export default Address;