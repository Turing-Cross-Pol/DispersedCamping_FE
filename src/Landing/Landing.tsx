import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Navigation } from '../interfaces'

export const Landing = ({ navigation }: { navigation: Navigation }) => {

  const handlePress = () => {
    console.log('button pressed');
  }

  const handlePost = () => {
    console.log('handling post');
    navigation.navigate('Post')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DispersedCamping</Text>
      <View style={styles.button}>
        <Button 
          title="Find a Campsite"
          onPress={() => handlePress()}
          accessibilityLabel="Find a Campsite"
          color='#fff'
        />
      </View>
      <Button
        title="Post a Campsite"
        onPress={() => handlePost()}
        accessibilityLabel="Post a Campsite"
        disabled={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'brown',
    color: '#fff',
  }
});
