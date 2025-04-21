import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";

const HeroSection: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} allowFontScaling={false}>
        Wir bringen ihr Unternehmen auf das nächste Level!
      </Text>
      <Text style={styles.subtitle} allowFontScaling={false}>
        Sie vereinbaren mit uns einen unverbindlichen Beratungstermin bei Ihnen
        zu Hause oder an Ihrem Arbeitsplatz. Wir finden dann das für Sie am
        besten geeignete Konzept für eine neue Innovative App oder Webseite.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#32E0A1", marginRight: height * 0.05 },
          ]} // Türkis
          onPress={() => console.log("Über uns gedrückt")}
        >
          <Text style={[styles.buttonText, { color: "#000" }]}>Über uns</Text>
        </TouchableOpacity>

        {/* Blauer Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0071e3" }]} // Blau
          onPress={() => console.log("Kontakt gedrückt")}
        >
          <Text style={styles.buttonText}>Kontakt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HeroSection;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff", // Helles Grau für den Container
    borderRadius: 30, // Optional: Abgerundete Ecken für den Container
    shadowColor: "#000", // Optional: Schatten für mehr Sichtbarkeit
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Schatten für Android
    marginHorizontal: width * 0.07, // 20% Abstand vom Bildschirmrand
    marginTop: height * 0.02, // Abstand nach oben
    marginBottom: height * 0.02, // Abstand nach unten
    alignItems: "flex-start", // Elemente links ausrichten
  },
  emptyLine: {
    height: 10, // Höhe der Leerzeile
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: height * 0.05, // Adjust the top margin to create space from the image
    textAlign: "left", // Align text to the left
    alignSelf: "flex-start", // Ensure the title starts at the left of the container
    fontFamily: "",
    marginLeft: width * 0.03, // Adjust left margin to create space from the container edge
    marginRight: width * 0.03, // Adjust right margin to create space from the container edge
  },
  subtitle: {
    fontSize: 18,
    color: "#000",
    marginTop: width * 0.05, // Adjust the top margin to create space from the title
    fontFamily: "",
    textAlign: "left", // Align text to the left
    alignSelf: "flex-start", // Ensure the title starts at the left of the container
    marginLeft: width * 0.03, // Adjust left margin to create space from the container edge
    marginRight: width * 0.03, // Adjust right margin to create space from the container edge
  },
  buttonContainer: {
    flexDirection: "row", // Arrange buttons side by side
    justifyContent: "space-between", // Add space between buttons
    marginTop: height * 0.05, // Add spacing above the buttons
    marginBottom: height * 0.05, // Abstand nach unten
    marginLeft: width * 0.03, // Adjust left margin to create space from the container edge
    marginRight: width * 0.03, // Adjust right margin to create space from the container edge
  },
  button: {
    backgroundColor: "#0071e3", // Button background color
    paddingVertical: height * 0.02, // Vertical padding for a thick button
    borderRadius: 30, // Rounded corners
    alignItems: "center", // Center text horizontally
    paddingHorizontal: width * 0.03, // Horizontal padding for button text
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial", // Use a system font for better performance
  },
});
