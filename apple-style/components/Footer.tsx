import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Footer: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} allowFontScaling={false}>
        © 2025 Nova Inc. All rights reserved.
      </Text>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#f5f5f7",
    alignItems: "center",
  },
  text: {
    color: "#888",
    fontSize: 14,
  },
});
