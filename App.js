import { View, Text } from 'react-native'
import React,{useRef} from 'react'
import Routes from './src/Navigation/Routes'
import { useScrollToTop } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {

 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Routes />
  </GestureHandlerRootView>
  )
}

export default App