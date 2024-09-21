import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import Navbar from '../component/Navbar2';
import { useNavigation } from '@react-navigation/native';

const SettingItem = ({ title, subtitle, onPress, navigation }) => {
  const handleNavigation = () => {
    switch (title) {
      case 'Country & Region':
        navigation.navigate('CountrySelection');
        break;
      case 'Currency':
        navigation.navigate('CurrencySelection');
        break;
      case 'Notifications':
        navigation.navigate('NotificationCustomize');
        break;
      case 'Privacy Policy':
        navigation.navigate('PrivacyPolicy');handleNavigation
        break;
      case 'Permissions':
        navigation.navigate('AppPermissions');
        break;
      case 'Safety Center':
        navigation.navigate('SafetyCenter');
        break;
      case 'About Us':
        navigation.navigate('AboutUs');
        break;
      case 'Share App':
        navigation.navigate('ShareApp');
        break;
      default:
        onPress();
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.settingItem} onPress={handleNavigation}>
        <View>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
        <Image
          source={require('../assets/Shape.png')}
          style={{ width: 15, height: 15, resizeMode: "contain" }}
        />
      </TouchableOpacity>
      <View style={styles.progressLine} />
    </View>
  );
};

const Setting = () => {
  const navigation = useNavigation();
  const settings = [
    { title: 'Country & Region', subtitle: 'Select Your Country & Region' },
    { title: 'Currency', subtitle: 'Select Your Currency' },
    { title: 'Notifications', subtitle: 'Customize your notifications' },
    { title: 'Privacy Policy', subtitle: 'Cookie preference details' },
    { title: 'Permissions', subtitle: 'Customize your App Permissions' },
    { title: 'Safety Center', subtitle: 'Your personal information is safe' },
    { title: 'About Us', subtitle: 'Company Details' },
    { title: 'Share App', subtitle: 'Share this app with your friends & family' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Setting" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {settings.map((setting, index) => (
          <SettingItem
            key={index}
            title={setting.title}
            subtitle={setting.subtitle}
            navigation={navigation}
            onPress={() => console.log(`Pressed ${setting.title}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    // padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 8,
    marginBottom: 8,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#999999',
  },
  progressLine: {
    height: 1,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
});

export default Setting;