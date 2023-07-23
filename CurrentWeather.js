import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { WeatherType } from '../utilities/WeatherType';

const CurrentWeather = ({ weatherData, iconLibrary }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;

  const weatherCondition = weather[0].main;

  // Choose the icon component based on the selected library
  const IconComponent = iconLibrary === 'FontAwesome5' ? FontAwesome5 : Feather;

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: WeatherType[weatherCondition].backgroundColor }]}>
      <View style={container}>
        <IconComponent name={WeatherType[weatherCondition].icon} size={100} color="white" />
        
        <Text style={[tempStyles, { color: 'white' }]}>{temp}</Text>
        <Text style={[feels, { color: 'white' }]}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={[highLow, { color: 'white' }]}
          messageTwoStyles={[highLow, { color: 'white' }]}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={WeatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: 'lightblue',
    flex: 1
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
