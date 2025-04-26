import React, { useRef } from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";

const AboutUs: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.title}>Welcome to My App</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            This is some scrollable content. Keep scrolling to see more. You can
            add as many sections as you want here.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            More content here! You can customize this for your layout, features,
            or anything else you want to show.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Extra space at bottom for scrolling
  },
  section: {
    marginBottom: 40,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "left",
  },
});
