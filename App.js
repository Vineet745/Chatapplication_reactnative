import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Component/Login'
import Register from './Component/Register'
import Exstyle from "./Stylesheets/App"
import Home from './Component/Home'
// import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator()
const App = () => {

  


  return (
    <SafeAreaView style={Exstyle.maincontainer}>
      <NavigationContainer>
     <Stack.Navigator>
  <Stack.Screen name="Register" component={Register}/> 
  <Stack.Screen name="Login" component={Login}/> 
  <Stack.Screen name="Home" component={Home}/> 
  

     </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App