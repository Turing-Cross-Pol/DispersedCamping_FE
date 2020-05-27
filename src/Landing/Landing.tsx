import React, { useState } from 'react';
import { COLORS } from '../constants.js'
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'PatuaOne': require('../../assets/fonts/PatuaOne-Regular.ttf'),
  'MavenPro-Medium': require('../../assets/fonts/MavenPro-Medium.ttf'),
});

export const Landing = ({ navigation }) => {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handlePress = () => {
    console.log('button pressed');
    
  }

  const handlePost = () => {
    console.log('handling post');
    navigation.navigate("Post");  
  }

  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
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
            <Text style={styles.typeBlock}>WilderNests</Text>
            <Text style={styles.tagline}>A guide to dispersed camping</Text>
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
  icon: {
    width: 127,
    height: 97,
    marginBottom: 20,
    marginTop: 100,
  },
  typeBlock: {
    fontSize: 50,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'PatuaOne',
    color: '#fff',
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'MavenPro-Medium'
  },
  buttonBlock: {
    fontSize: 20,
    flex: 2,
  },
  button: {
    backgroundColor: COLORS.purple,
    color: '#fff',
    marginBottom: 20,
    borderRadius: 4,
    fontFamily: 'MavenPro-Medium'
  }
});
