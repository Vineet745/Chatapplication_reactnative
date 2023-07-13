import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Registerstyle from '../Stylesheets/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  // useEffect(() => {
  //   GoogleSignin.configure()
  // }, [])

  //  Google Authetication

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo)
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log(error)
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log(error)
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log(error)
  //       // play services not available or outdated
  //     } else {
  //       console.log(error)
  //       // some other error happened
  //     }
  //   }
  // };

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // HandleLogin
  const handleLogin = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(res => {
        if (res.docs !== []) {
          console.log(JSON.stringify(res.docs[0].data()));
          gotonext(res.docs[0].data().name,
          res.docs[0].data().email,
          res.docs[0].data().userId)
        } else {
          console.warn('User not found');
        }
      })
      .catch(error => {
        console.log(error);
        console.warn('User not found'); 
      });
  };

const gotonext =async(name,email,userId)=>{
await AsyncStorage .setItem("NAME",name);
await AsyncStorage .setItem("EMAIL",email);
await AsyncStorage .setItem("USERID",userId);
navigation.navigate("Main");
};

  return (
    <View style={Registerstyle.Registermain}>
      <View style={Registerstyle.InputWrapper}>
        <Text style={Registerstyle.headtext}>Login User</Text>

        <TextInput
          style={Registerstyle.inputbox}
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Enter your Email"></TextInput>
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          style={Registerstyle.inputbox}
          placeholder="Enter your Password"></TextInput>

        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}>
          <Text style={Registerstyle.button}>Login User</Text>
        </TouchableOpacity>

        <View style={Registerstyle.logindetails}>
          <Text style={Registerstyle.wrapper}>
            Not a Member?{' '}
            <Text
              style={Registerstyle.link}
              onPress={() => props.navigation.navigate('Register')}>
              Please Register
            </Text>
          </Text>
          <View>
            <Text
              style={{
                textAlign: 'center',
                margin: 20,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Or
            </Text>
            <TouchableOpacity onPress={() => signIn()}>
              <Text style={Registerstyle.google}>Login with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
