import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';

// Continue Tutorial https://youtu.be/obH0Po_RdWk?t=6173

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
