import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList, StatusBar, Modal, Pressable, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../component/Navbar'
import { useNavigation } from '@react-navigation/native'

const cartItems = [
  { id: '1', title: "Zara Midi Dress", price: 5.30, oldPrice: 12.30, quantity: 2, image: require('../assets/image1.png') },
  { id: '2', title: "Zara Midi Dress", price: 9.10, oldPrice: 12.30, quantity: 1, image: require('../assets/image1.png') },
  { id: '3', title: "Zara Midi Dress", price: 7.00, oldPrice: 12.30, quantity: 3, image: require('../assets/image1.png') },
  { id: '4', title: "Zara Midi Dress", price: 7.00, oldPrice: 12.30, quantity: 3, image: require('../assets/image1.png') },

];

const OrderSummary = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("GAIABAY12")

  const [modalVisible, setModalVisible] = useState(false);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={item.image}
        style={styles.itemImage}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.itemOldPrice}>${item.oldPrice.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityBackground}>
          <Icon name="remove" size={wp('4%')} color="grey" />
        </TouchableOpacity>
        <View style={styles.quantityButton}>
          <Text style={styles.quantityText}>{item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.quantityBackground}>
          <Icon name="add" size={wp('4%')} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotal = () => {
    const cartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedValue = cartValue * 0.6;
    const promocodeDiscount = 12;
    const totalValue = discountedValue - promocodeDiscount;

    return {
      cartValue: cartValue.toFixed(2),
      discountedValue: discountedValue.toFixed(2),
      promocodeDiscount: promocodeDiscount.toFixed(2),
      totalValue: totalValue.toFixed(2),
    };
  };

  const totals = calculateTotal();

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Order Summary" />

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
      <View style={styles.Addresscontainer}>
        <View>
          <View style={styles.leftContent}>
            <Text style={styles.deliverTo}>Deliver to:</Text>
            <Text style={styles.deliverTo}>Rishabh Singh,</Text>
            <Text style={styles.deliverTo}>201307</Text>

            <Text style={styles.addressType}>{(Office)}</Text>

          </View>
          <Text style={styles.AddressText}>302, Krishna Homes-1, Sector 73, A Square Mall</Text>
        </View>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>  
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", flex: 1, justifyContent: "center",
          alignSelf: "center"

        }}>
          <Pressable style={{
            backgroundColor: "rgba(0, 0, 0, 0.0)", width: "100%", flex: 1, justifyContent: "flex-end",
            alignSelf: "center",
          }} onPress={() => {
            setModalVisible(false)
          }}>

            <View style={[styles.modalView, {}]}>



              <View style={styles.promoCodeContainer}>
                <TextInput
                  style={styles.promoCodeInput}
                  placeholder="Enter Your Promo Code"
                  placeholderTextColor="#888"
                />
                <TouchableOpacity >
                  <Image source={require('../assets/inactive.png')} style={{ width: 50, height: 50, resizeMode: "contain", }} />
                </TouchableOpacity>

              </View>6
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 18, marginTop: 5, marginLeft: 10, }}>Your Promo Codes</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 30, backgroundColor: "#fff", borderRadius: 8, marginTop: 12, }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ backgroundColor: "red", width: 70, height: 70, flexDirection: "column", borderTopLeftRadius: 9, borderBottomLeftRadius: 9, }}>
                    <Text>122</Text>
                    <Text style={{ color: "red" }}>jnnfb</Text>

                  </View>
                  <View style={{ alignSelf: "center", marginLeft: 10 }}>
                    <Text style={{ color: "rgba(41, 41, 41, 1)", fontSize: 12, fontWeight: "500" }}>Personal offer</Text>
                    <Text style={{ color: "#000", fontWeight: "200", fontSize: 13, }}>mypromocode2020</Text>
                  </View>
                </View>



                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "rgba(153, 153, 153, 1)", fontSize: 13, right: 10 }}>6 days remaining</Text>
                  <TouchableOpacity style={{ padding: 10, borderRadius: 30, backgroundColor: "rgba(255, 186, 73, 1)", width: 55, alignSelf: "flex-end", marginTop: 10, right: 10, paddingBottom: 7, }}
                    onPress={() => {
                      setModalVisible(false)

                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12, bottom: 4 }}>Apply</Text>

                  </TouchableOpacity>

                </View>

              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 30, backgroundColor: "#fff", borderRadius: 8, marginTop: 12, }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ backgroundColor: "red", width: 70, height: 70, flexDirection: "column", borderTopLeftRadius: 9, borderBottomLeftRadius: 9, }}>
                    <Text>122</Text>
                    <Text style={{ color: "red" }}>jnnfb</Text>

                  </View>
                  <View style={{ alignSelf: "center", marginLeft: 10 }}>
                    <Text style={{ color: "rgba(41, 41, 41, 1)", fontSize: 12, fontWeight: "500" }}>Personal offer</Text>
                    <Text style={{ color: "#000", fontWeight: "200", fontSize: 13, }}>mypromocode2020</Text>
                  </View>
                </View>


                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "rgba(153, 153, 153, 1)", fontSize: 13, right: 10 }}>6 days remaining</Text>
                  <TouchableOpacity style={{ padding: 10, borderRadius: 30, backgroundColor: "rgba(255, 186, 73, 1)", width: 55, alignSelf: "flex-end", marginTop: 10, right: 10, paddingBottom: 7, }}
                    onPress={() => {
                      setModalVisible(false)

                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12, bottom: 4 }}>Apply</Text>

                  </TouchableOpacity>

                </View>

              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 30, backgroundColor: "#fff", borderRadius: 8, marginTop: 12, }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ backgroundColor: "red", width: 70, height: 70, flexDirection: "column", borderTopLeftRadius: 9, borderBottomLeftRadius: 9, }}>
                    <Text>122</Text>
                    <Text style={{ color: "red" }}>jnnfb</Text>

                  </View>
                  <View style={{ alignSelf: "center", marginLeft: 10 }}>
                    <Text style={{ color: "rgba(41, 41, 41, 1)", fontSize: 12, fontWeight: "500" }}>Personal offer</Text>
                    <Text style={{ color: "#000", fontWeight: "200", fontSize: 13, }}>mypromocode2020</Text>
                  </View>
                </View>


                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "rgba(153, 153, 153, 1)", fontSize: 13, right: 10 }}>6 days remaining</Text>
                  <TouchableOpacity style={{ padding: 10, borderRadius: 30, backgroundColor: "rgba(255, 186, 73, 1)", width: 55, alignSelf: "flex-end", marginTop: 10, right: 10, paddingBottom: 7, }}
                    onPress={() => {
                      setModalVisible(false)

                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12, bottom: 4 }}>Apply</Text>

                  </TouchableOpacity>

                </View>

              </View>




            </View>

          </Pressable>
        </View>
      </Modal>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />

      <TouchableOpacity style={styles.promoCodeContainer} onPress={() => {
        setModalVisible(true)
      }}>
        <TextInput
          style={styles.promoCodeInput}
          placeholder={value ? value : "Enter Your Promo Code"}
          placeholderTextColor="#888"
        />
        {value ? <Text style={{ color: '#00A707', fontSize: 11, paddingHorizontal: 10, fontWeight: 'bold', alignSelf: "center" }}>Already Applied</Text> : <TouchableOpacity style={styles.promoCodeButton}

        >
          <Icon name="arrow-forward" size={wp('5%')} color="white" />
        </TouchableOpacity>}
      </TouchableOpacity>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow1}>
          <Text style={styles.cartHead}>Cart Value</Text>
          <Text style={styles.cartVal}>${totals.cartValue}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Discounted Value</Text>
          <Text style={styles.cartVal}>${totals.discountedValue}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Promocode Discount</Text>
          <Text style={styles.cartVal}>${totals.promocodeDiscount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.cartHead}>Delivery Charges</Text>
          <Text style={styles.cartVal}>Free</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total Value</Text>
          <Text style={styles.totalPrice}>${totals.totalValue}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton} >
        <Text style={styles.checkoutButtonText}>Proceed To Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  scrollView: {
    paddingBottom: hp('2%'),

  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: hp('2%'),
    padding: wp('1%'),
    borderRadius: wp('2%'),
    marginHorizontal: wp('4%'),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange'
  },
  itemImage: {
    width: wp('20%'),
    height: wp('25%'),
    borderRadius: wp('2%'),
  },
  itemDetails: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  itemTitle: {
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
    color: 'black',
  },
  itemDescription: {
    fontSize: wp('2.5%'),
    color: 'black',
    marginBottom: hp('0.5%'),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#32CD32',
  },
  itemOldPrice: {
    fontSize: wp('3%'),
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: wp('2%'),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    right: wp('3%'),
    bottom: hp('1%'),
    backgroundColor: '#FFBA49',
    borderRadius: wp('1%'),


  },
  quantityButton: {
    padding: wp('1%'),

  },
  quantityBackground: {
    backgroundColor: '#FFF7E6',
    borderRadius: wp('4%'),
    width: wp('4%'),
    height: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  quantityText: {
    fontSize: wp('3.5%'),
    color: 'black',
    fontWeight: 'bold',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: '#FFBA49',
    borderRadius: wp('10%'),
    backgroundColor: 'white',
    overflow: 'hidden',
    alignSelf: "center"
  },
  promoCodeInput: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('3.5%'),
    color: 'black',
    alignSelf: "center",
  },
  promoCodeButton: {
    backgroundColor: '#FFBA49',
    padding: wp('3%'),
    borderRadius: wp('10%'),
    marginRight: wp('0.5%'),

  },
  summaryContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginHorizontal: wp('4%'),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
    borderTopWidth: 0.4,
    borderTopColor: 'grey',
    paddingTop: hp('1%'),
   
  },
  summaryRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),

  },
  totalRow: {
    borderTopWidth: 1,

    marginTop: hp('1%'),
  },
  totalText: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontWeight: 'bold',
    color: '#00A707',
  },
  checkoutButton: {
    backgroundColor: '#FFDF4A',
    padding: wp('4%'),
    alignItems: 'center',
    margin: wp('4%'),
    borderRadius: wp('10%'),
  },
  checkoutButtonText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: 'black',
  },
  cartHead: {
    color: 'black',
  },
  cartVal: {
    color: 'black',
    fontWeight: "bold",
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
    borderStyle: 'dotted', 
    borderWidth: 1,
    borderColor: '#FFD700',
    zIndex: -1,
  },

  Addresscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    margin: wp('4%'),
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  deliverTo: {
    fontWeight: 'bold',
    marginRight: 5,
    color: 'black',
    fontSize: 13,
  },
  AddressText: {
    color: 'black',
    fontSize: 12,
  },

  noteTag: {
    backgroundColor: 'yellow',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },

  changeButton: {
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
    borderColor: '#FFDF4A',
    backgroundColor: "white",
    

  },
  changeText: {
    color: 'black',
  },
  addressType: {
    fontSize: wp('3%'),
    color: 'black',
    backgroundColor: '#FFDF4A',
    paddingHorizontal: wp('2%'),
    marginLeft: hp('1.5%'),
    borderRadius: wp('0.6%'),


  },
  modalView: {

    backgroundColor: 'white',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    padding: 10,
    alignSelf: "center",
    shadowColor: '#000',




    elevation: 5,
    width: "100%"



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
    height: 60, 
    backgroundColor: '#fff', 
  },
  promoCodeContainer: {
    flexDirection: 'row',

    marginBottom: hp('2%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: wp('10%'),
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  promoCodeInput: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('3.5%'),
    color: '#333',
  },

});

export default OrderSummary;