import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

const ChatScreen = ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerTitleAlign: "left",
            headerStyle: { backgroundColor: "#FFF" },
            headerTitleStyle: { color: 'white' },
            headerTintColor: "black",
            headerBackTitleVisible: false,
            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Avatar rounded source={{
                        uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                    }}/>
                    <Text
                    style={{ color: "black", marginLeft: 10, fontWeight: "700" }}
                    >{route.params.chatName}</Text>
                </View>
            ),
            // headerLeft: () => {
            //     <TouchableOpacity
            //         style={{ marginLeft: 10, width: 24 }}
            //         onPress={ navigation.goBack }
            //     >
            //         {/* <Ionicons name="ios-arrow-back" size={24} color="black" /> */}
            //         {/* <Ionicons name="chevron-back" size={24} color="white" /> */}
            //         {/* <AntDesign name="back" size={24} color="black" /> */}
            //         {/* <AntDesign name="arrowleft" size={24} color="white"/> */}
            //     </TouchableOpacity>
            // },
            // headerRight: () => {
            //     <View
            //         style={{
            //             flexDirection: "row",
            //             justifyContent: "space-between",
            //             width: 80,
            //             marginRight: 20,
            //         }}
            //     >
            //         <TouchableOpacity>
            //             <FontAwesome name="video-camera" size={24} color="black"/>
            //         </TouchableOpacity>
            //         <TouchableOpacity>
            //             <Ionicons name="call" size={24} color="black" />
            //         </TouchableOpacity>
            //     </View>
            // }
        })
    }, [navigation]);

    return (
        <SafeAreaView>
            <Text>{route.params.chatName}</Text>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
