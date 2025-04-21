import React, { useRef } from "react";
import { SafeAreaView, Animated, StyleSheet } from "react-native";
import InfoBar from "./InfoBar";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Footer from "./Footer";

import { NavigationProp } from "@react-navigation/native";

function MainScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <InfoBar scrollY={scrollY} />
      <NavigationBar navigation={navigation} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <HeroSection />
        <Features />
        <Footer />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
});
