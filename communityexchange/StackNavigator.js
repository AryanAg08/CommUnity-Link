import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./App/Pages/LoginScreen";
import RegisterScreen from "./App/Pages/RegisterScreen";
import MainChat from "./App/Pages/MainChat";
import FriendsScreen from "./App/Pages/FriendsScreen";
import ChatsScreen from "./App/Pages/ChatsScreen";
import ChatMessagesScreen from "./App/Pages/ChatMessagesScreen";
import HomePage from "./App/Pages/HomePage";
import EventPage from "./App/Pages/EventPage";
import CommunityScreen from "./App/Pages/explorecommunities";



const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Events" component={EventPage} />
        <Stack.Screen name="ChatMain" component={MainChat} />
        <Stack.Screen name="communityexplore" component={CommunityScreen} />

        <Stack.Screen name="Friends" component={FriendsScreen} />

        <Stack.Screen name="Chats" component={ChatsScreen} />

        <Stack.Screen name="Messages" component={ChatMessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});