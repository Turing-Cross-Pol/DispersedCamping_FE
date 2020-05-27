import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from "react-native";
import { Landing } from "../Landing/Landing";
import { PostForm } from "../PostForm/PostForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Post" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

// <Stack.Screen name="Post" component={PostForm} />
