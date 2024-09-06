import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView,StatusBar } from 'react-native';
import Navbar from '../component/Navbar2';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [10, 15, 20, 25, 30, 35];
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <Navbar title="Gaiabay Wallet Top-up" />
      <ScrollView>
    

                  
<View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Info</Text>
            <Text style={styles.infoText}>
              Gaiabay Wallet Top-up amount will be added in the Gaiabay Wallet balance.
            </Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.content}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Available Wallet Balance</Text>
            <Text style={styles.balanceAmount}>$0.00</Text>
          </View>

          <Text style={styles.topupLabel}>Top-up your Gaiabay Wallet</Text>
          
          <View style={styles.amountGrid}>
            {predefinedAmounts.map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.amountButton,
                  selectedAmount === amount && styles.selectedAmount,
                ]}
                onPress={() => setSelectedAmount(amount)}
              >
                <Text style={styles.amountButtonText}>${amount.toFixed(2)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.customAmountInput}
            placeholder="Enter an amount (eg.50)"
            keyboardType="numeric"
            value={customAmount}
            onChangeText={setCustomAmount}
          />

          <TouchableOpacity style={styles.topupButton}>
            <Text style={styles.topupButtonText}>Top-up</Text>
          </TouchableOpacity>

          <View style={styles.noteSection}>
            <Text style={styles.noteTitle}>Please Note</Text>
            {[...Array(5)].map((_, index) => (
              <View key={index} style={styles.noteItem}>
                <Text style={styles.noteBullet}>•</Text>
                <Text style={styles.noteText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>View T&Cs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>FAQs</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content:{
padding:16
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
 
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal:16,
    marginBottom: 16,
    marginTop:16
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: "black",
    fontSize:18
  },
  infoText: {
    fontSize: 14,
    color: "black",
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
   
  },
  balanceLabel: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black',
  },
  topupLabel: {
    fontSize: 16,
    marginBottom: 8,
    color:'black',
    fontWeight: 'bold',
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
 
  },
  amountButton: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#FFDF4A',
    borderRadius: 4,
    padding: 3,
    marginBottom: 8,
    alignItems: 'center',
  },
  selectedAmount: {
    backgroundColor: '#FFDF4A',
  },
  amountButtonText: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 16,
  },
  customAmountInput: {
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 16,
    fontSize: 16,
    paddingVertical: 8,
  },
  topupButton: {
    backgroundColor: '#FFDF4A',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  topupButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  noteSection: {
    marginBottom: 16,
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black',
  },
  noteItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  noteBullet: {
    marginRight: 8,
    color:'#FFA500'
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color:'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: '#FFA500',
  },
  progressLine: {
    height: 1,
    borderWidth: 1, 
    borderColor: '#FFD700',
  },
});

export default Wallet;