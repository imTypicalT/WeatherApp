import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        {/* Temperature */}
        <Text style={styles.temp}>73F</Text>
        {/* Feels Like */}
        <Text style={styles.feels}>Feels Like: 76F</Text>
        {/* High & Low */}
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 78F </Text>
          <Text style={styles.highLow}>Low: 59F</Text>
        </View>
        {/* Description */}
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>It's sunny</Text>
          <Text style={styles.message}>It's perfect t-shirt weather</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default App;
