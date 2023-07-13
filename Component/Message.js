import {View, Text} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Message = () => {
  //    Code is found at google at giftchat site

  const [messageList, setMessageList] = useState([]);
  const route = useRoute();
  useEffect(() => {
    const subscriber = firestore()
    .collection('chats')
    .doc(route.params.id + route.params.data.userId)
    .collection('messages')
    .orderBy('createdAt', 'desc');
    subscriber.onSnapshot(querysnapshot => {
      const allmessages = querysnapshot.docs.map(item => {
        return {...item._data, createdAt: Date.parse(new Date())};
      });
      setMessageList(allmessages);
    });
    return () => subscriber();
  }, []);

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessageList(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    // It is for our Side//Message Send
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    // It is for another Side// Message Send Id Interchange in Doc
    firestore()
      .collection('chats')
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
  }, []);

   
   


  return (
    <View style={{flex: 1, backgroundColor: '#ece5dd'}}>
      <GiftedChat
        messages={messageList}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
      />
    </View>
  );
};

export default Message;
