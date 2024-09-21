import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../component/Navbar2';



const Section = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon name={isExpanded ? 'expand-less' : 'expand-more'} size={24} color="#FFBA49" />
      </TouchableOpacity>
      {isExpanded && <Text style={styles.sectionContent}>{content}</Text>}
    </View>
  );
};

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
      <Navbar title="About Us" />
      <ScrollView style={styles.content}>
        <Text style={styles.introTitle}>Introduction</Text>
        <Text style={styles.introText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Section  title="Value proposition" content="Our value proposition content goes here." />
        <Section   title="Brands" content="Information about our brands goes here." />
        <Section title="Recognition" content="Details about our recognition and awards go here." />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#FFDF4A',
    padding: 16,
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black',
    
  },
  introText: {
    marginBottom: 16,
    color: '#393636',
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "black",
  },
  sectionContent: {
    marginTop: 8,
   
  },
});

export default AboutUs;