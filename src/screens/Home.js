import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.sliderContainer}>
      <Swiper autoplay activeDotColor="#22D4FF" autoplayTimeout={5}>
        <View style={styles.item}>
          <Image
            source={require("../../assets/banner-1.jpg")}
            style={styles.imgItem}
            resizeMode="cover"
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../assets/banner-2.jpg")}
            style={styles.imgItem}
            resizeMode="cover"
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../assets/banner-3.jpg")}
            style={styles.imgItem}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
  },
  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  item: {
    flex: 1,
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
