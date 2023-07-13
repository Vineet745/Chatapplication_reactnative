import {View, Text, TextInput, TouchableOpacity,ScrollView,Image} from 'react-native';
import React, {useState} from 'react';
import Registerstyle from '../Stylesheets/Register';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import uuid from "react-native-uuid"

const Register = props => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = async () => {
    try {
        const userId =uuid.v4();
        firestore().collection("users").doc(userId).set({
          name: name,
          age: age,
          city: city,
          username: username,
          email: email,
          userId:userId ,
        }).then(res =>{
          console.log("user Created")
          navigation.navigate('Login');
        }).catch(error=>{
          console.log(error)
        })
             
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
    <View style={Registerstyle.Registermain}>
      <View style={Registerstyle.InputWrapper}>
        <Text style={Registerstyle.headtext}>Register User</Text>
        <TextInput
          style={Registerstyle.inputbox}
          placeholder="Enter your Name"
          value={name}
          onChangeText={value => setName(value)}></TextInput>
        <TextInput
          style={Registerstyle.inputbox}
          placeholder="Enter your Age"
          value={age}
          onChangeText={value => setAge(value)}></TextInput>
        <TextInput
          value={city}
          onChangeText={value => setCity(value)}
          style={Registerstyle.inputbox}
          placeholder="Enter your City"></TextInput>
        <TextInput
          value={username}
          onChangeText={value => setUsername(value)}
          style={Registerstyle.inputbox}
          placeholder="Enter your Username"></TextInput>
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          style={Registerstyle.inputbox}
          placeholder="Enter your Email"></TextInput>
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          style={Registerstyle.inputbox}
          placeholder="Enter your Password"></TextInput>

        <TouchableOpacity
          onPress={() => {
            handleRegister();
          }}>
          <Text style={Registerstyle.button}>Create User</Text>
        </TouchableOpacity>

        <View style={Registerstyle.logindetails}>
          <Text style={Registerstyle.wrapper}>
            Are you a user?{' '}
            <Text
              style={Registerstyle.link}
              onPress={() => props.navigation.goBack('Login')}>
              Please Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Register;
