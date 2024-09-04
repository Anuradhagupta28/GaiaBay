import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../component/Navbar'
import { useNavigation } from '@react-navigation/native';
import FloatingLabelInput from '../component/FloatingLabelInput';

const EditProfile = () => {
    const navigation = useNavigation()

    return (
        <View style={[styles.container, { paddingBottom: 40 }]}>

            <StatusBar backgroundColor="#FFDF4A" barStyle="dark-content" />
            <View style={styles.topbar}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={{color:"#000",fontSize: 20,marginLeft:7,fontWeight:"900"}}>Edit Profile</Text>
      </View>
      
    </View>
            <Image source={require('../assets/myupload.png')}
                style={{ width: 120, height: 120, resizeMode: "contain", alignSelf: "center", marginTop: 50, }}
            />
            <ScrollView style={{ paddingBottom: 40, }}>
                <View>

                    <Text style={[styles.formSubtitle, { marginTop: 20, marginLeft: 20, top: 10, }]}>First Name</Text>

                    <TextInput
                        label="Mobile No."
                        placeholder='enter name'
                        placeholderTextColor={"rgba(57, 54, 54, 0.8)"}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />

                    <Text style={[styles.formSubtitle, { marginTop: 10, marginLeft: 20, top: 10, }]}>Last Name</Text>

                    <TextInput
                        label="Mobile No."
                        placeholder='last Name'
                        placeholderTextColor={"grey"}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <Text style={[styles.formSubtitle, { marginTop: 10, marginLeft: 20, top: 10, }]}>Gender</Text>

                    <TextInput
                        label="Mobile No."
                        placeholder='gender'
                        placeholderTextColor={"#666"}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <Text style={[styles.formSubtitle, { marginTop: 10, marginLeft: 20, top: 10, }]}>Mobile No.</Text>

                    <TextInput
                        label="Mobile No."
                        placeholder='mobile No.'
                        placeholderTextColor={"#666"}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <Text style={[styles.formSubtitle, { marginTop: 10, marginLeft: 20, top: 10, }]}>Email ID</Text>

                    <TextInput
                        label="Mobile No."
                        placeholder='email ID'
                        placeholderTextColor={"#666"}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />

                </View>

                <TouchableOpacity style={{ width: "90%", borderRadius: 30, alignSelf: "center", padding: 10, backgroundColor: "rgba(255, 223, 74, 1)", marginTop: 20, elevation: 30, }}>
                    <Text style={{ color: "#000", fontWeight: "black", fontSize: 18, textAlign: "center" }}>Save</Text>

                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, icon: {
        width: 27,
        height: 23,
        resizeMode: 'contain',
    },
    infoText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    infoSubText: {
        fontSize: 12,
        color: '#666',
    },
    formContainer: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        padding: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFD700',
    },
    brandText: {
        color: '#FFDF4A',
    },
    formSubtitle: {
        marginBottom: 20,
        color: '#000',
        fontSize: 15,

    },
    heading2: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },


    referralContainer: {
        marginTop: 10,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    }, input: {
        height: 56,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(255, 223, 74, 1)",
        width: "90%",
        alignSelf: "center",
        color: "#000",
        paddingLeft: 10,


    },
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFDF4A',
        padding: 15,
      },
      head: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButton: {
        padding: 5,
      },
      backIcon: {
        width: 15,
        height: 11,
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
      },
      logo: {
        width: 100,
        height: 25,
        marginLeft: 10,
      },
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 20,
      },
});


export default EditProfile