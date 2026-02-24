import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

// Easy:

// Create a new screen called "Contact.js" in the screens folder.
// This screen should contain a single Text element with the words "Contact Page".
// Add this screen to your MainStackNavigator and test that you can
// navigate to it from the Home screen.

// Medium:

// On the About screen, display a list of three things about your
// app (you can make them up). Use the FlatList component to display this list.
