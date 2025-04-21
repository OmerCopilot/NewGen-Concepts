import React, { useRef } from 'react';
import { SafeAreaView, Animated, StyleSheet, ScrollView } from 'react-native';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import InfoBar from './components/InfoBar';

export default function App() {
  const scrollY = useRef(new Animated.Value(0)).current; // Track scroll position

  return (
    <SafeAreaView style={styles.container}>
      {/* Pass scrollY to InfoBar */}
      <InfoBar scrollY={scrollY} />
      <NavigationBar />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16} // Optimize scroll performance
      >
        <HeroSection />
        <Features />
        <Footer />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
});