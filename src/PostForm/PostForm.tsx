import React from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { Navigation } from "../interfaces";
import { Input, CheckBox } from "react-native-elements";

export const PostForm = () => {
  return (
    <ScrollView>
      <Input placeholder="Campsite Title" label="Title:" />
      <Input placeholder="Closest city/town" label="City:" />
      <Input placeholder="State" label="State:" />
      <Input placeholder="Latitude" label="Lat:" />
      <Input placeholder="Longitude" label="Long:" />
      <Input
        placeholder="A brief description of the site including details about the surroundings"
        label="Description:"
      />
      <Input
        placeholder="How far is it from major roads? Any tips for landmarks to look out for?"
        label="Description:"
      />
      <Input placeholder="Image URL" label="Image:" />
      <Text>Available Amenities Nearby:</Text>
      <CheckBox title="Firepit" />
      <CheckBox title="Boating/Water" />
      <CheckBox title="Fishing" />
      <CheckBox title="Mountain Biking Trails" />
      <CheckBox title="ATV Trails" />
      <CheckBox title="Horse Trails" />
      <CheckBox title="Hiking Trails" />
    </ScrollView>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "purple",
//     flex: 1,
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "brown",
//     color: "#fff",
//   },
// });
