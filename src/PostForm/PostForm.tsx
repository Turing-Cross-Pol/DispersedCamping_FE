import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { Navigation } from "../interfaces";
import { Input, CheckBox } from "react-native-elements";

export const PostForm = () => {
  const [amenities, setAmenities] = useState<string[]>([]);

  const amenityIds = {
    905: "Firepit",
    919: "Boating/Water",
    935: "Fishing",
    949: "Mountain Biking Trails",
    965: "ATV trails",
    979: "Horse Trails",
    995: "Hiking Trails"
  }

  const handleAmenities = e => {
    const amenity: string = amenityIds[e.currentTarget];
    if (amenities.includes(amenity)) {
      const filteredAmenities = amenities.filter(am => am !== amenity);
      setAmenities(filteredAmenities);
    } else {
      setAmenities([...amenities, amenity])
    }
  }

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
      <CheckBox title="Firepit" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[905])}/>
      <CheckBox title="Boating/Water" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[919])}/>
      <CheckBox title="Fishing" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[935])}/>
      <CheckBox title="Mountain Biking Trails" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[949])}/>
      <CheckBox title="ATV Trails" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[965])}/>
      <CheckBox title="Horse Trails" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[979])}/>
      <CheckBox title="Hiking Trails" onPress={(e) => handleAmenities(e)} checked={amenities.includes(amenityIds[995])}/>
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
