import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from './Chat';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();
const Bottommain = () => {

  console.log()
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          }
          return <Ionicons name={iconName} size={30} color={'black'} />;
        },
        headerStyle: {
          backgroundColor: '#075e54',
        },
        headerTintColor: 'white',
      })}>
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default Bottommain;
