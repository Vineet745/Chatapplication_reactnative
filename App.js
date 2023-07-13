import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Component/Login'
import Register from './Component/Register'
import Exstyle from "./Stylesheets/App"
import Splash from './Component/Splash'
import Bottommain from './Component/Bottomnavigation.js/Bottommain'
import Message from './Component/Message'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator()
const App = () => {
  
  
  


  return (
    <SafeAreaView style={Exstyle.maincontainer}>
      <NavigationContainer >
     <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#075e54"
      },
      headerTintColor:"white"
     }}>
  <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
     <Stack.Screen name="Register" component={Register}/> 
     <Stack.Screen name="Main" component={Bottommain} options={{headerShown:false}}/> 
     <Stack.Screen name="Message" component={Message} options={{headerShown:true}}/> 
     </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App