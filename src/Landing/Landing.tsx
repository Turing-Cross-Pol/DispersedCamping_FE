import React from 'react';
import { COLORS } from '../constants.js'
import { StyleSheet, Text, View, Button } from 'react-native';

export const Landing = ({ navigation }) => {

  const handlePress = () => {
    console.log('button pressed');
    
  }

  const handlePost = () => {
    console.log('handling post');
    navigation.navigate("Post");  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WilderNests</Text>
      <View style={styles.button}>
        <Button 
          title="Find a Campsite"
          onPress={() => handlePress()}
          accessibilityLabel="Find a Campsite"
          color='#fff'
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Post a Campsite"
          onPress={() => handlePost()}
          accessibilityLabel="Post a Campsite"
          disabled={false}
          color='#fff'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.purple,
    color: '#fff',
    marginBottom: 20,
  }
});
