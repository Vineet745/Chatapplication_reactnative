import {View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Profilestyle from '../../Stylesheets/Profilestyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {firestore} from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';


const Profile = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [post,setpost] = useState()
  const navigation = useNavigation()
  const [imagedata, setImagedata] = useState(null);

  const imagelibrary = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    setImagedata(result);

    console.log(result);
  };

  const uploadImage = async () => {
    const userid = await AsyncStorage.getItem('USERID');
    const reference = storage().ref(imagedata.assets[0].fileName);
    const pathToFile = imagedata.assets[0].uri;
    // uploads file In storage
    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(imagedata.assets[0].fileName)
      .getDownloadURL();
    console.log(url);
    // upload file in firestore database
    firestore()
      .collection('users').doc(userid)
      .update({
        image: url,
      }).then((res) => {
        console.log('Image Added====>',res);
        getuserImage();
        navigation.navigate("Chat")
      })
      .catch(error => {
        console.log('myimage====>',error);
      });
  };



  


  


  


  



  // User Information Data

 



//  Get image
const getuserImage = async()=>{
  try {
    const id = await AsyncStorage.getItem('USERID');
    const usersRef = firestore().collection('users');
    const doc = await usersRef.doc(id).get();

    if (doc.exists) {
      console.log(doc.exists)
      // User profile data exists
      const userData = doc.data();
      // Access the user profile properties
      setpost(userData.image)
      // Process or display the retrieved data as needed
    } else {
      // User profile doesn't exist
      console.log('User profile not found!');
    }
  } catch (error) {
    console.log('Error getting user profile:', error);
  }
};







  






  const getUserProfile = async () => {
    try {
      const id = await AsyncStorage.getItem('USERID');
      const usersRef = firestore().collection('users');
      const doc = await usersRef.doc(id).get();

      if (doc.exists) {
        // User profile data exists
        const userData = doc.data();
        // Access the user profile properties
        setName(userData.name);
        setUsername(userData.username);
        setEmail(userData.email);
        setCity(userData.city);
        setpost(userData.image)
        // Process or display the retrieved data as needed
      } else {
        // User profile doesn't exist
        console.log('User profile not found!');
      }
    } catch (error) {
      console.log('Error getting user profile:', error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <View style={Profilestyle.maincontainer}>
      <View style={Profilestyle.childcontainer}>
        <View style={Profilestyle.Profile}>
          <View style={Profilestyle.Innerprofile}>
            <View>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 50}}
                source={{uri:post}}></Image>
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 5,
                backgroundColor: 'green',
                borderRadius: 50,
                padding: 5,
              }}
              onPress={() => imagelibrary()}>
              <Ionicons name="pencil" size={25}></Ionicons>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => uploadImage()}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
        </View>
        
        <View style={Profilestyle.Information}>
          <Text style={Profilestyle.details}>Name: {name}</Text>
          <Text style={Profilestyle.details}>Username: {username}</Text>
          <Text style={Profilestyle.details}>Email :{email}</Text>
          <Text style={Profilestyle.details}>City : {city}</Text>
        </View>
      </View>
    </View>
  );
}


export default Profile;
