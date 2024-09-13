import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { ChevronLeft, Check } from 'lucide-react';
import Navbar from '../component/Navbar2';
import Icon from 'react-native-vector-icons/FontAwesome';



const CountryItem = ({ country, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.countryItem} onPress={() => onSelect(country)}>
    <Text style={styles.countryName}>{country}</Text>
    {isSelected &&  <Icon name="check" size={20} color="#FFBA49" />}
  </TouchableOpacity>
);

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState('Australia');
  const countries = [
    'Algeria', 'Andorra', 'Armenia', 'Australia', 'Azerbaijan', 'Bahrain',
    'Belgium', 'Bosnia & Herzegovina', 'Brazil', 'Brunei Darussalam', 'Bulgaria',
    'Canada', 'Chile', 'Colombia', 'Croatia', 'Cyprus', 'Czech Republic',
    'Denmark', 'Dominican Republic', 'Ecuador', 'El Salvador'
  ];

  const renderItem = ({ item }) => (
    <CountryItem
      country={item}
      isSelected={item === selectedCountry}
      onSelect={setSelectedCountry}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
       <Navbar title="Country & Region" />
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  listContent: {
    backgroundColor: 'white',
    paddingTop: 8,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  countryName: {
    fontSize: 16,
  },
});

export default CountrySelection;