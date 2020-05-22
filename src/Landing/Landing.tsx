import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Landing = () => {

  const handlePress = () => {
    console.log('button pressed');
    
  }

  const handlePost = () => {
    console.log('handling post');
    
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
