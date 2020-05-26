import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, Button } from "react-native";
import { Navigation } from "../interfaces";
// import { Input, CheckBox } from "react-native-elements";

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
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Tell us about your campsite</Text>
      <TextInput
        style={styles.input}
        placeholder="Campsite Title"
        label="Title:"
        value={title}
        onChangeText={(value) => handleInputChange(value, setTitle)}
      />
      <TextInput
        style={styles.input}
        placeholder="Closest city/town"
        label="City:"
        value={city}
        onChangeText={(value) => handleInputChange(value, setCity)}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        label="State:"
        value={state}
        onChangeText={(value) => handleInputChange(value, setState)}
      />
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        label="Lat:"
        value={lat}
        onChangeText={(value) => handleInputChange(value, setLat)}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        label="Long:"
        value={long}
        onChangeText={(value) => handleInputChange(value, setLong)}
      />
      <TextInput
        style={styles.input}
        placeholder="A brief description of the site including details about the surroundings"
        label="Description:"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(value) => handleInputChange(value, setDescription)}
      />
      <TextInput
        style={styles.input}
        placeholder="How far is it from major roads? Any tips for landmarks to look out for?"
        label="Directions:"
        multiline={true}
        numberOfLines={4}
        value={directionInfo}
        onChangeText={(value) => handleInputChange(value, setDirectionInfo)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        label="Image:"
        value={imgUrl}
        onChangeText={(value) => handleInputChange(value, setImgUrl)}
      />
      <Text style={styles.text}>Available Amenities Nearby:</Text>
      {/* <CheckBox
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
      /> */}
      {/* <Button title="Submit Campsite" /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  input: {
    fontSize: 10
  }
});
