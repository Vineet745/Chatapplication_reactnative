import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import chatstyle from '../../Stylesheets/Chat'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
let id = ""



const Chat = () => {
    const navigation = useNavigation(); 
    const [users, setusers] = useState([])
    useEffect(() => {
      getUsers();
    }, [])
    

const getUsers=async()=>{ 
    id = await AsyncStorage.getItem('USERID')
    let template = [];
    const email = await AsyncStorage.getItem("EMAIL")
     firestore().collection("users").where("email","!=",email).get().then(res=>{
        if(res.docs != []){
            res.docs.map(item=>{
                template.push(item.data())
            }
                )
        setusers(template)
     }})
}
  return (
    <View style={chatstyle.container}>
        <FlatList data={users} renderItem={({item,index})=>{
            return(
                <TouchableOpacity style={chatstyle.list} onPress={()=>(navigation.navigate("Message",{data:item,id:id}))}>
                    <View style={chatstyle.Icon}>
                    <Image style={chatstyle.Image} source={item.image?{uri:item.image}:require("../../assets/user.png")}></Image>
                    </View>
                    <Text style={chatstyle.username}>{item.name}</Text>
                </TouchableOpacity>
            )
        }}></FlatList>
    </View>
  )
}

export default Chat