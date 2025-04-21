import React, { useRef } from "react";
import { SafeAreaView, Animated, StyleSheet, Text } from "react-native";

function AboutUs() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <Text style={styles.text}>Welcome to the Über Uns page!</Text>
        {/* Add more content here */}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  text: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
});
