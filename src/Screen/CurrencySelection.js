import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Navbar from '../component/Navbar2';
import Icon from 'react-native-vector-icons/FontAwesome';

const CurrencyItem = ({ currency, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.currencyItem} onPress={() => onSelect(currency)}>
    <Text style={styles.currencyName}>{currency}</Text>
    {isSelected &&  <Icon name="check" size={20} color="#FFBA49" />}
  </TouchableOpacity>
);

const CurrencySelection= () => {
  const [selectedCurrency, setSelectedCurrency] = useState('US Dollar');
  const currencies = [
    'US Dollar', 'Euro', 'Pound Sterling', 'Australian Dollar',
    'Indian Rupee', 'Swiss Franc', 'Canadian Dollar', 'Kuwaiti Dinar'
  ];

  const renderItem = ({ item }) => (
    <CurrencyItem
      currency={item}
      isSelected={item === selectedCurrency}
      onSelect={setSelectedCurrency}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
        <Navbar title="Currency" />
      <FlatList
        data={currencies}
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
    flexGrow: 1,
  },
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  currencyName: {
    fontSize: 16,
    color: 'black',
  },
});

export default CurrencySelection;