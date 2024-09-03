import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, Dimensions ,StatusBar} from 'react-native';
import Navbar from '../component/Navbar'


const { width } = Dimensions.get('window');

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "Important : Flash 50% off Deals back. Are you ready for shopping?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date: "17 April, 2024",
      time: "05:37 pm",
      image: null,
    },
    {
      id: 2,
      title: "Important : Flash 50% off Deals back. Are you ready for shopping?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date: "17 April, 2024",
      time: "05:37 pm",
      image: require('../assets/product1.png')
    },
    {
        id: 3,
        title: "Important : Flash 50% off Deals back. Are you ready for shopping?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "17 April, 2024",
        time: "05:37 pm",
        image: null,
      },
      {
        id: 4,
        title: "Important : Flash 50% off Deals back. Are you ready for shopping?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        date: "17 April, 2024",
        time: "05:37 pm",
        image: require('../assets/product1.png')
      },
    // Add more notifications as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
   <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
   <Navbar title="Notification"  />
      <ScrollView style={styles.notificationList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
           <View style={styles.notificationCont}>
           <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationContent}>{notification.content}</Text>
            {notification.image && (
              <Image   source={notification.image}  style={styles.notificationImage} />
            )}
            <View style={styles.notificationMeta}>
                <View style={{flexDirection:'row', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/date.png')} style={{height:12,width:12}}/>
                    <Text style={styles.notificationDate}>{notification.date}</Text>
                    </View>
              <View  style={{flexDirection:'row', gap: 10,}}>
              <Image source={require('../assets/clock.png')} style={{height:12,width:12}}/>

                <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
           
            </View>
           </View>
            <View style={styles.progressLine} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  notificationList: {
    flex: 1,
    backgroundColor: 'white',
  },
  notificationItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical:10,
  
    // marginBottom: 8,
    // marginHorizontal: 16,
  },
  notificationTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "black",
  },
  notificationContent: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  notificationImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  notificationMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationDate: {
    fontSize: 12,
    color: '#999',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  progressLine: {
    height: 1,
    borderWidth: 1, 
    borderColor: '#FFD700',
  },

  notificationCont:{
   paddingHorizontal:15,
   paddingBottom:15,
    }
});

export default Notification;
