import { View, Text } from 'react-native'
import React,{useRef} from 'react'
import Routes from './src/Navigation/Routes'
import { useScrollToTop } from '@react-navigation/native';


const App = () => {

 

  return (
    <View style={{flex:1}}>
       <Routes />
    </View>
  )
}

export default App