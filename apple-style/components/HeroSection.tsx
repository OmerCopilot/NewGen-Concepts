import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const HeroSection: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>iPhone 14 Pro</Text>
      <Text style={styles.subtitle}>Pro. Beyond.</Text>
    </SafeAreaView>
  );
}
export default HeroSection;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#555555',
    marginTop: 10,
  },
});