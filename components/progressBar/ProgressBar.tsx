import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ProgressBar() {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.line}> </View>
      <View style={styles.progressDetails}>
        <Text style={styles.text}>Verbs daily goal</Text>
        <Text style={styles.text}>0 / 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '80%',
  },
  line: {
    width: '100%',
    height: '20%',
    backgroundColor: '#BDE3BE',
    borderRadius: 15,
  },
  progressDetails: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
  },
});
