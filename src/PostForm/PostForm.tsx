import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "../interfaces";
import { Input, CheckBox } from "react-native-elements";

export const PostForm = () => {
  return (
    <View>
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
      <Text>Available Amenities</Text>
      <CheckBox title="Click Here" />
    </View>
  );
};

// City.String
// State.String
// Name.string
// Long.Float
// Lat.Float
// Description.string
// Driving Tips.string
// Image.string(url for now. upload an image as a stretch goal)
// Timestamps
// has_many comments
// has_many amenities

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
