import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from 'react'

export default function App() {
  const message = 'Hello!'
  return (
    <View style={{height: 100, width: 100, backgroundColor: 'green'}}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
