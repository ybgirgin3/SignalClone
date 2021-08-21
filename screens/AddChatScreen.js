import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async () => {
    await db
      .collection('chats')
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerStyle: { backgroundColor: "#FFF" },
      headerTitleStyle: { color: 'black' },
      headerTintColor: "black",
      headerBackTitle: "Chats",
    });
  }, [navigation])

  return (
    <View style={styles.container}>
      <Input placeholder="Enter a Chat Name" value={input} onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon
            name="wechat"
            type="antdesign"
            size={24}
            color="black"
          />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create New Chat" style={styles.button} />

    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: "100%",
  },
  button: {

  }
})
