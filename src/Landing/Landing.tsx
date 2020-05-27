import React from 'react';
import { COLORS } from '../constants.js'
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
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
        <ImageBackground
          source={require('../../assets/images/landing-bg.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.logoBlock}>
            <Image 
              style={styles.icon}
              source={require('../../assets/images/tent-icon.png')}
            />
            <Text style={styles.text}>WilderNests</Text>
          </View>
          <View style={styles.buttonBlock}>
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
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logoBlock: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlock: {
    fontSize: 20,
    flex: 2,
  },
  icon: {
    width: 127,
    height: 97,
    marginBottom: 20,
    marginTop: 100,
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
