import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, Button } from "react-native";
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
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Tell us about your campsite</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Campsite Title"
        value={title}
        onChangeText={(value) => handleInputChange(value, setTitle)}
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        placeholder="Closest city/town"
        value={city}
        onChangeText={(value) => handleInputChange(value, setCity)}
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={(value) => handleInputChange(value, setState)}
      />
      <Text style={styles.label}>Lat:</Text>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={lat}
        onChangeText={(value) => handleInputChange(value, setLat)}
      />
      <Text style={styles.label}>Long:</Text>
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={long}
        onChangeText={(value) => handleInputChange(value, setLong)}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="A brief description of the site including details about the surroundings"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(value) => handleInputChange(value, setDescription)}
      />
      <Text style={styles.label}>Directions:</Text>
      <TextInput
        style={styles.input}
        placeholder="How far is it from major roads? Any tips for landmarks to look out for?"
        multiline={true}
        numberOfLines={4}
        value={directionInfo}
        onChangeText={(value) => handleInputChange(value, setDirectionInfo)}
      />
      <Text style={styles.label}>Image:</Text>
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imgUrl}
        onChangeText={(value) => handleInputChange(value, setImgUrl)}
      />
      <Text style={styles.text}>Available Amenities Nearby:</Text>
      <CheckBox
        title="Firepit"
        onPress={() => handleAmenities("Firepit")}
        checked={amenities.includes("Firepit")}
        checkedColor={"#537A72"} // COLORS.purple
      />
      <CheckBox
        title="Boating/Water"
        onPress={() => handleAmenities("Boating/Water")}
        checked={amenities.includes("Boating/Water")}
        checkedColor={"#537A72"}
      />
      <CheckBox
        title="Fishing"
        onPress={() => handleAmenities("Fishing")}
        checked={amenities.includes("Fishing")}
        checkedColor={"#537A72"}
      />
      <CheckBox
        title="Mountain Biking Trails"
        onPress={() => handleAmenities("Mountain Biking Trails")}
        checked={amenities.includes("Mountain Biking Trails")}
        checkedColor={"#537A72"}
      />
      <CheckBox
        title="ATV Trails"
        onPress={() => handleAmenities("ATV Trails")}
        checked={amenities.includes("ATV Trails")}
        checkedColor={"#537A72"}
      />
      <CheckBox
        title="Horse Trails"
        onPress={() => handleAmenities("Horse Trails")}
        checked={amenities.includes("Horse Trails")}
        checkedColor={"#537A72"}
      />
      <CheckBox
        title="Hiking Trails"
        onPress={() => handleAmenities("Hiking Trails")}
        checked={amenities.includes("Hiking Trails")}
        checkedColor={"#537A72"}
      />
      <Button title="Submit Campsite" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    marginLeft: 20,
    color: '#537A72'
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: "#7E62CF",
  },
});

// export const COLORS = {
//   purple: '#7E62CF',
//   green: '#537A72',
//   peach: '#E5AD83',
//   cream: '#E6CFAC',
//   pink: '#F1778D'
// }
