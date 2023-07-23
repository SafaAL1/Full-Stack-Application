import React from "react";
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const Clouds = ({ weatherData }) => {
  const {
    container,
    iconStyles,
    messageStyles
  } = styles;

  const { icon, message, backgroundImage } = weatherData;

  return (
    <ImageBackground source={backgroundImage} style={imageLayout}>
      <View style={container}>
        {/* Render your cloud weather information here */}
        <Text style={iconStyles}>{icon}</Text>
        <Text style={messageStyles}>{message}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyles: {
    color: 'white', // Set the color for the icon
    fontSize: 48
  },
  messageStyles: {
    color: 'white', // Set the color for the message
    fontSize: 24
  },
});

export default Clouds;
