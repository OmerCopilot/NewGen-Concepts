import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Dimensions,
} from "react-native";

interface InfoBarProps {
  scrollY: Animated.Value; // Accept scrollY as a prop
}

const InfoBar: React.FC<InfoBarProps> = ({ scrollY }) => {
  // Animate the opacity or translateY based on scroll position
  const translateY = scrollY.interpolate({
    inputRange: [0, 100], // Adjust range as needed
    outputRange: [0, -50], // Move up by 50px
    extrapolate: "clamp", // Prevent values from going beyond the range
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0], // Fade out as you scroll down
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }], opacity }, // Apply animations
      ]}
    >
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={styles.text} allowFontScaling={false}>
            📞 +1 (555) 123-4567
          </Text>
          <Text style={styles.text} allowFontScaling={false}>
            ✉️ contact@nova.com
          </Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default InfoBar;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", // Background color for the InfoBar
  },
  background: {
    flex: 1,
    justifyContent: "center",
    height: 20, // Set a fixed height for the InfoBar
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 14,
    marginHorizontal: width * 0.05, // Adjust margin based on screen width
  },
});
