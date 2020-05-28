import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from "react-native";
import { Landing } from "../Landing/Landing";
// import { MapView } from "../MapView/MapView";
// import { ListView } from "../ListView/ListView";
import { PostForm } from "../PostForm/PostForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Home" component={Landing} options={{headerShown: false}} />
        <Stack.Screen name="Post" component={PostForm} />
        {/* <Stack.Screen name="Map" component={MapView} />
        <Stack.Screen name="Map" component={ListView} /> */}
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
