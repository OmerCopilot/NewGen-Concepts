import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

type FeaturesProps = {
  navigation: NavigationProp<any>;
};

const Features: React.FC<FeaturesProps> = ({ navigation }) => {
  const features: {
    icon: "rocket" | "paint-brush" | "mobile";
    title: string;
    description: string;
  }[] = [
    {
      icon: "rocket",
      title: "Fast Performance",
      description:
        "Experience blazing fast speeds with our optimized solutions.",
    },
    {
      icon: "paint-brush",
      title: "Minimal Design",
      description: "Sleek and modern designs tailored to your needs.",
    },
    {
      icon: "mobile",
      title: "React Native",
      description: "Cross-platform apps built with React Native.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title} allowFontScaling={false}>
        Unsere Features
      </Text>
      <View style={styles.featureContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureBox}>
            <FontAwesome name={feature.icon} size={40} color="#0071e3" />
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
      <View style={{ height: 50 }}>
        <Text style={styles.featureDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
      <View style={{ height: 50 }} /> {/* Spacer to push content down */}
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  featureContainer: {
    flexDirection: "row", // Arrange the feature boxes side by side
    justifyContent: "space-evenly", // Add equal space between the boxes and edges
    marginHorizontal: 60, // Add space from the edges of the screen
  },
  featureBox: {
    flex: 1, // Make each box take equal space
    alignItems: "center", // Center content horizontally
    padding: 15, // Add padding inside each box
    marginHorizontal: 20, // Add spacing between the boxes
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Add shadow for Android
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 50, // This adds space below the text
  },
});
