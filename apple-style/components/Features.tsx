import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Features: React.FC = () => {
  const featureList: string[] = [
    'Fast Performance',
    'Minimal Design',
    'Built with React Native',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {featureList.map((feature, idx) => (
        <Text key={idx} style={styles.feature}>
          • {feature}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  feature: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});
