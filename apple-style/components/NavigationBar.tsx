import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
  Dimensions,
  ImageBackground,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";

export default function NavigationBar({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const { width } = useWindowDimensions(); // Get the screen width
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the dropdown menu
  const dropdownHeight = useRef(new Animated.Value(0)).current; // Animated value for dropdown height

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Animate closing the dropdown
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsMenuOpen(false));
    } else {
      // Animate opening the dropdown
      setIsMenuOpen(true);
      Animated.timing(dropdownHeight, {
        toValue: 250, // Adjust the height of the dropdown menu
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const isPhoneSize = width <= 768; // Define a breakpoint for phone size

  return (
    <>
      {/* Main Navbar */}
      <SafeAreaView style={styles.navbar}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.jpg")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>NewGen Concepts</Text>
        </View>

        {isPhoneSize ? (
          // Render a button for smaller screens
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
        ) : (
          // Render links for larger screens
          <SafeAreaView style={styles.links}>
            <Text
              style={styles.link}
              allowFontScaling={false}
              onPress={() => navigation.navigate("Home")}
            >
              STARTSEITE
            </Text>
            <Text
              style={styles.link}
              allowFontScaling={false}
              onPress={() => navigation.navigate("AboutUs")}
            >
              ÜBER UNS
            </Text>
            <Text
              style={styles.link}
              allowFontScaling={false}
              onPress={() => navigation.navigate("OurFeatures")}
            >
              UNSERE LEISTUNGEN
            </Text>
            <Text style={styles.link} allowFontScaling={false}>
              PROJEKTE
            </Text>
            <Text style={styles.link} allowFontScaling={false}>
              KONTAKT
            </Text>
            <Text style={styles.biggerLink} allowFontScaling={false}>
              ✉️ ANGEBOT
            </Text>
          </SafeAreaView>
        )}
      </SafeAreaView>

      {isPhoneSize && (
        <Animated.View
          style={[styles.secondNavbar, { height: dropdownHeight }]}
        >
          {isMenuOpen && (
            <>
              <Text
                style={styles.dropdownLink}
                allowFontScaling={false}
                onPress={() => navigation.navigate("Home")}
              >
                STARTSEITE
              </Text>
              <Text
                style={styles.dropdownLink}
                allowFontScaling={false}
                onPress={() => navigation.navigate("AboutUs")}
              >
                ÜBER UNS
              </Text>
              <Text
                style={styles.dropdownLink}
                allowFontScaling={false}
                onPress={() => navigation.navigate("OurFeatures")}
              >
                UNSERE LEISTUNGEN
              </Text>
              <Text style={styles.dropdownLink} allowFontScaling={false}>
                PROJEKTE
              </Text>
              <Text style={styles.dropdownLink} allowFontScaling={false}>
                KONTAKT
              </Text>
            </>
          )}
        </Animated.View>
      )}
    </>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  navbar: {
    height: height * 0.15, // Default height
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    position: "relative", // Allow absolute positioning of child elements
    borderBottomWidth: width * 0.001,
    borderBottomColor: "#d0d0d0", // Subtle border for 3D effect
  },
  secondNavbar: {
    backgroundColor: "#ffffff",
    overflow: "hidden", // Prevent content overflow during animation
    paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center", // Center the dropdown links horizontally
  },
  logoContainer: {
    flex: 1, // Allow the logoContainer to take up space proportionally
    left: "10%", // Move it to the center horizontally
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 32,
    fontFamily: "Arial", // Use a system font for better performance
    fontWeight: "bold",
  },
  logoImage: {
    width: width * 0.09, // Adjust logo size based on screen width
    height: height * 0.09, // Adjust logo size based on screen height
    resizeMode: "contain", // Ensure the image scales proportionally
    borderRadius: 50,
  },
  links: {
    flexDirection: "row",
    justifyContent: "flex-end", // Align links to the right
    alignItems: "center", // Align all items vertically to the center
    flex: 2, // Allow the links to take up space proportionally
  },
  link: {
    marginHorizontal: 10, // Adjust margin based on screen width
    fontSize: 16,
    color: "#0071e3",
  },
  biggerLink: {
    marginHorizontal: width * 0.02, // Adjust margin based on screen width
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // Set text color to contrast with the background
    lineHeight: 40, // Set a consistent line height for alignment
    backgroundColor: "#0071e3", // Set the background color
    paddingHorizontal: 20, // Add horizontal padding for the oval shape
    paddingVertical: 5, // Add vertical padding for the oval shape
    borderRadius: 20, // Make the background oval
    textAlign: "center", // Center the text inside the oval
    maxHeight: height * 0.1, // Default height
  },
  menuButton: {
    alignItems: "flex-end", // Align the button to the right
    right: "10%", // Move it to the center horizontally
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    maxHeight: height * 0.1, // Default height
  },
  menuButtonText: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    maxHeight: height * 0.1, // Default height
  },
  dropdownLink: {
    fontSize: 16,
    color: "#0071e3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    width: "70%", // Set the width of the dropdown links to 70% of the secondNavbar
  },
});
