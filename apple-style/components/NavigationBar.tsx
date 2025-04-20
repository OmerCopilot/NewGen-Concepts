import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function NavigationBar() {
  return (
    <SafeAreaView style={styles.navbar}>
      <Text style={styles.logo}>Apple</Text>
      <SafeAreaView style={styles.links}>
        <Text style={styles.link}>Store</Text>
        <Text style={styles.link}>Mac</Text>
        <Text style={styles.link}>iPhone</Text>
        <Text style={styles.link}>Watch</Text>
        <Text style={styles.link}>Support</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  links: {
    flexDirection: 'row',
  },
  link: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#0071e3',
  },
});