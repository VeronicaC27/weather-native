import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { geocodeAndGetWeather, icon } from './Helpers';
import styles from './styles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locationInputText: "",
      locationName: "",
      currentTemperature: "",
      currentSummary: "",
      currentIcon: "",
      forecast: []
    };
  }
  async getWeather() {
    // Call the geocoding and weather API, get back a location and weather object
    const response = await geocodeAndGetWeather(this.state.locationText);

    // console.log response.location
    // console.log response.weather

    // manipulate state
  }
  render() {
    // Three Views inside the parent view
    // 1. TextInput and Button for city name and to call getWeather()
    // 2. Current weather conditions (styles provided with currentIcon, locationText,
    //    currentTemperature, currentSummary)
    // 3. Forecast (forecastDay, forecastIcon, forecastTemperature)
    let forecast = [];

    return (
      <View style={styles.container}>
        <View>
          {/* TextInput and Button */}
        </View>
        <View style={styles.currentWeather}>
          {/* Current weather conditions */}
          <Text>Put something here.</Text>
        </View>
        <View style={styles.forecast}>
          {forecast}
        </View>
      </View>
    );
  }
}