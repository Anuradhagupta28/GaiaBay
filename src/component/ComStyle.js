import { Dimensions, StyleSheet,StatusBar, } from 'react-native';
import Color from '../component/Color'

const ComStyle = StyleSheet.create({
    container:{
        flex:1,

    },
    imagebackground:{
        width:"100%",
        height:"100%",
        backgroundColor:"#FFDF4A",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"

    },topbar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:20,
        marginTop:20,

    },topbar2:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
     padding:20,

      backgroundColor:"#FFDF4A",

  },searchContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: '#FFDF4A',
        width: '90%',
        borderRadius: 30,
        paddingHorizontal:10,
        marginTop:15,
        elevation:3,
        backgroundColor:"#fff"
      },
      searchIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
      },
      textInput: {
        flex: 1,
        marginHorizontal: 10, 
        color:"#000"
      },
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 14, 
      },
    
  
});

export default ComStyle;
