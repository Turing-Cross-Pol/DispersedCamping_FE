import React from 'react';
import { COLORS } from '../constants.js'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export const Landing = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    'PatuaOne': require('../../assets/fonts/PatuaOne-Regular.ttf'),
  });

  const handlePress = () => {
    console.log('button pressed');
    
  }

  const handlePost = () => {
    console.log('handling post');
    navigation.navigate("Post");  
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
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
    fontFamily: 'PatuaOne',
    color: '#fff',
  },
  button: {
    backgroundColor: COLORS.purple,
    color: '#fff',
    marginBottom: 20,
  }
});
