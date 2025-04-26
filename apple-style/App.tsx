import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./components/MainScreen"; // Import MainScreen
import AboutUs from "./components/AboutUs"; // New screen for "Über Uns"
import OurFeatures from "./components/OurFeatures"; // New screen for "Our Featrures"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* First Screen: Main Page */}
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* Second Screen: About Us */}
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ title: "Über Uns" }}
        />
        {/* Third Screen: Our Features */}
        <Stack.Screen
          name="OurFeatures"
          component={OurFeatures}
          options={{ title: "Unsere Leistungen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
