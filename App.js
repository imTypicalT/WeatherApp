import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/Cities';

// Continue Tutorial https://youtu.be/obH0Po_RdWk?t=6173

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
