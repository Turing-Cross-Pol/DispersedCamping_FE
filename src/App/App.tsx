import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Landing } from "../Landing/Landing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} />
          {/* <Stack.Screen name="Map" component={MapView} />
          <Stack.Screen name="Post" component={PostForm} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});


// Go back to previous route
{/* <Button title="Go back" onPress={() => navigation.goBack()} /> */ }

// You can "stack" routes, but that doesn't seem super important rn?


// You can also pass params via a route, like with react router

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
