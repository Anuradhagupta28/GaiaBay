import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions,StatusBar } from 'react-native';
import Navbar from '../component/Navbar2'


const { width } = Dimensions.get('window');

const OrderTrackingScreen = () => {
  const trackingSteps = [
    {
      title: 'Order Confirmed',
      date: 'Thu, 1st Aug 24',
      details: [
        { text: 'Your Order has been placed.', time: '10:00pm' },
        { text: 'Seller has processed your order.', time: '10:30pm' },
        { text: 'Your item has been picked up by courier partner.', time: '11:00pm' },
      ],
    },
    {
      title: 'Shipped',
      date: 'Fri, 2nd Aug 24',
      details: [
        { text: 'Ekart Logistics - FMPP24650818833', time: '9:00am' },
        { text: 'Your item has been shipped.', time: '9:30am' },
        { text: 'Your item has been received in the hub nearest to you', time: '6:00pm' },
      ],
    },
    {
      title: 'Out for Delivery',
      date: 'Sun, 4th Aug 24',
      details: [
        { text: 'Your item is out for delivery', time: '2:00pm' },
      ],
    },
    {
      title: 'Delivered',
      date: 'Sun, 4th Aug 24',
      details: [
        { text: 'Your item has been delivered', time: '4:00pm' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Track orders"  />
      <ScrollView style={styles.content}>
        {trackingSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepHeader}>
              <View style={styles.dot} />
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDate}>{step.date}</Text>
            </View>
            <View style={styles.stepDetails}>
              {step.details.map((detail, detailIndex) => (
                <View key={detailIndex} style={styles.detailItem}>
                  <Text style={styles.detailText}>{detail.text}</Text>
                  <Text style={styles.detailTime}>{detail.time}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
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
  content: {
    flex: 1,
    backgroundColor: '#FFF',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    padding: 16,
  },
  stepContainer: {
    marginBottom: 24,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00A707',
    marginRight: 8,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    color: "black",
  },
  stepDate: {
    color: '#888',
    fontSize: 12,
  },
  stepDetails: {
    marginLeft: 18,
    borderLeftWidth: 1,
    borderLeftWidth:2,
    borderLeftColor: '#00A707',
    paddingLeft: 16,
  },
  detailItem: {
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: "black",
  },
  detailTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default OrderTrackingScreen;