import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Switch } from 'react-native';
import Navbar from '../component/Navbar2';

const NotificationCustomize = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
     <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="Notification" />
      <View style={styles.content}>
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingTitle}>Notification Button</Text>
            <Text style={styles.settingSubtitle}>This will not affect any order updates</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#FFDF4A" }}
            thumbColor={isEnabled ? "black" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
  },
});

export default NotificationCustomize;