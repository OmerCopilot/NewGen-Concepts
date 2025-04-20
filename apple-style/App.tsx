import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <HeroSection />
        <Features />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
});