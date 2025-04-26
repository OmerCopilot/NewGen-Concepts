import React, { useRef } from "react";
import {
  SafeAreaView,
  Animated,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from "react-native";
import InfoBar from "../components/InfoBar";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/MainScreen/HeroSection";
import Features from "../components/MainScreen/Features";
import Footer from "../components/Footer";

import { NavigationProp } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

function MainScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.page}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <InfoBar scrollY={scrollY} />
        <NavigationBar navigation={navigation} />
      </View>

      {/* Scrollable Body */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        scrollEventThrottle={16}
      >
        {/* Optional spacer if needed (we already pushed ScrollView down) */}
        <HeroSection navigation={navigation} />
        <Features navigation={navigation} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;

const HEADER_HEIGHT = 120; // Adjust based on InfoBar + NavigationBar height

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f5f5f7",
    position: "relative", // to keep positioning context
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    ...(Platform.OS === "web" ? { width: screenWidth } : { right: 0 }),
    backgroundColor: "#f5f5f7",
  },
  scrollContent: {
    marginTop: 120, // This is to make sure the content is below the fixed header
    paddingBottom: 100,
  },
});
