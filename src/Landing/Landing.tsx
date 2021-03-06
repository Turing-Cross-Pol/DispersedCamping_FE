import React, { useState } from 'react';
import { COLORS } from '../constants'
import { Navigation } from '../interfaces';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
// import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);

  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export const Landing = ({ navigation }: {navigation: Navigation }) => {

  let [fontsLoaded] = useFonts({
    'PatuaOne-Regular': require('../../assets/fonts/PatuaOne-Regular.ttf'),
    'MavenPro-Medium': require('../../assets/fonts/MavenPro-Medium.ttf')
  })

  const handlePress = () => {
    console.log('button pressed');
    
  }

  const handlePost = () => {
    console.log('handling post');
    navigation.navigate("Post");  
  }

  if (!fontsLoaded) {
    return (
      <AppLoading />
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
    fontFamily: 'PatuaOne-Regular',
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
  }
});
