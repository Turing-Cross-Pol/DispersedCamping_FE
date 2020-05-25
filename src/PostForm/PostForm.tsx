import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { Navigation } from "../interfaces";
import { Input, CheckBox } from "react-native-elements";

export const PostForm = () => {
  const [amenities, setAmenities] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [lat, setLat] = useState<string>("");
  const [long, setLong] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [directionInfo, setDirectionInfo] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const handleAmenities = (amenity: string) => {
    if (amenities.includes(amenity)) {
      const filteredAmenities = amenities.filter((am) => am !== amenity);
      setAmenities(filteredAmenities);
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleInputChange = (value, func) => {
    func(value);
  };

  return (
    <ScrollView>
      <Input
        placeholder="Campsite Title"
        label="Title:"
        value={title}
        onChangeText={(value) => handleInputChange(value, setTitle)}
      />
      <Input
        placeholder="Closest city/town"
        label="City:"
        value={city}
        onChangeText={(value) => handleInputChange(value, setCity)}
      />
      <Input
        placeholder="State"
        label="State:"
        value={state}
        onChangeText={(value) => handleInputChange(value, setState)}
      />
      <Input
        placeholder="Latitude"
        label="Lat:"
        value={lat}
        onChangeText={(value) => handleInputChange(value, setLat)}
      />
      <Input
        placeholder="Longitude"
        label="Long:"
        value={long}
        onChangeText={(value) => handleInputChange(value, setLong)}
      />
      <Input
        placeholder="A brief description of the site including details about the surroundings"
        label="Description:"
        value={description}
        onChangeText={(value) => handleInputChange(value, setDescription)}
      />
      <Input
        placeholder="How far is it from major roads? Any tips for landmarks to look out for?"
        label="Directions:"
        value={directionInfo}
        onChangeText={(value) => handleInputChange(value, setDirectionInfo)}
      />
      <Input
        placeholder="Image URL"
        label="Image:"
        value={imgUrl}
        onChangeText={(value) => handleInputChange(value, setImgUrl)}
      />
      <Text>Available Amenities Nearby:</Text>
      <CheckBox
        title="Firepit"
        onPress={() => handleAmenities("Firepit")}
        checked={amenities.includes("Firepit")}
      />
      <CheckBox
        title="Boating/Water"
        onPress={() => handleAmenities("Boating/Water")}
        checked={amenities.includes("Boating/Water")}
      />
      <CheckBox
        title="Fishing"
        onPress={() => handleAmenities("Fishing")}
        checked={amenities.includes("Fishing")}
      />
      <CheckBox
        title="Mountain Biking Trails"
        onPress={() => handleAmenities("Mountain Biking Trails")}
        checked={amenities.includes("Mountain Biking Trails")}
      />
      <CheckBox
        title="ATV Trails"
        onPress={() => handleAmenities("ATV Trails")}
        checked={amenities.includes("ATV Trails")}
      />
      <CheckBox
        title="Horse Trails"
        onPress={() => handleAmenities("Horse Trails")}
        checked={amenities.includes("Horse Trails")}
      />
      <CheckBox
        title="Hiking Trails"
        onPress={() => handleAmenities("Hiking Trails")}
        checked={amenities.includes("Hiking Trails")}
      />
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
