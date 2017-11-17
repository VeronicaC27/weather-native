// Weather Native
//
// 1. Create a TextInput to enter a city name. Hook up an event handler to store
//    the value inputted into this.state.locationInputText (remember BookFace?)
// 2. Create a button (e.g. "Get the weather!") that, when pressed, calls
//    the getWeather() function.
// 3. Retrieve the values from the API call, and create the UI components
//    necessary to display them on-screen. Succesfully implement the current
//    weather first, then the forecast.
//
// HINTS
// - Use the this.state.forecast array as provided, to hold the entirety of what comes
//   back from the Dark Sky API, i.e. response.weather.daily.data. Loop through
//   that to create the forecast on-screen.
// - Occasionally, you'll want to conditionally display a component, i.e. only
//   when it actually has a value to show. You'll need to do this with the
//   current icon, like this:
//   {this.state.currentIcon && <Icon name={this.state.currentIcon} size={100} color="#181818" /> }

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
    const response = await geocodeAndGetWeather(this.state.locationInputText);

    // Try the following, to see what they contain
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
    //
    // Refer to styles.js to see styles that are already provided.
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
