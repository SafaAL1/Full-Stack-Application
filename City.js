import React from 'react';
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconTexts'

const City = () => {
  const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/cityB.jpg')} style={imageLayout}>
        <Text style={[cityName, cityText]}>Toronto</Text>
        <Text style={[countryName, cityText]}>Canada</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName="user" iconColor="white" bodyText="2.7 million" bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName="sunrise" iconColor="white" bodyText="05:26:28am" bodyTextStyles={riseSetText} />
          <IconText iconName="sunset" iconColor="white" bodyText="08:56:55pm" bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;