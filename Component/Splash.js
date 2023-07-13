import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
      }, 3000);
      checklogin();
    }, [])
    
   const checklogin = async()=>{
    const id = await AsyncStorage.getItem("USERID");
    if(id!==null){
        navigation.navigate('Main')
    }else{
        navigation.navigate('Login')
    }
   }


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Chat App</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#075e54",
        justifyContent:"center",
        alignItems:"center",
        
      },
      logo:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    }
})

export default Splash