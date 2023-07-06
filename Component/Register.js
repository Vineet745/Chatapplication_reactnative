import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Registerstyle from '../Stylesheets/Register';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Register = props => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (
        name.length > 0 &&
        password.length > 0 &&
        age.length > 0 &&
        pincode.length > 0 &&
        city.length > 0 &&
        username.length > 0 &&
        email.length
      ) {
        const isuserCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log('User Created');
        // Other fields of user

        const userData = {
          name: name,
          age: age,
          pincode: pincode,
          city: city,
          username: username,
          email: email,
        };

        await firestore().collection('users').add(userData);
      } else {
        console.warn('Please fill the all fields');
      }
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
          style={Registerstyle.inputbox}
          placeholder="Enter your Pincode"
          value={pincode}
          onChangeText={value => setPincode(value)}></TextInput>
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
              onPress={() => props.navigation.navigate('Login')}>
              Please Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
