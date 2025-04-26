import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen"; // Import MainScreen
import AboutUs from "./screens/AboutUs"; // New screen for "Über Uns"
import OurFeatures from "./screens/OurFeatures"; // New screen for "Our Featrures"
import Projects from "./screens/Projects"; // New screen for "Projekte"
import Contacts from "./screens/Contacts";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* First Screen: Main Page */}
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false, cardStyle: { flex: 1 } }}
        />
        {/* Second Screen: About Us */}
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ title: "Über Uns", cardStyle: { flex: 1 } }}
        />
        {/* Third Screen: Our Features */}
        <Stack.Screen
          name="OurFeatures"
          component={OurFeatures}
          options={{ title: "Unsere Leistungen", cardStyle: { flex: 1 } }}
        />
        <Stack.Screen
          name="Projects"
          component={Projects}
          options={{ title: "Projekte", cardStyle: { flex: 1 } }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: "Kontakte", cardStyle: { flex: 1 } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
