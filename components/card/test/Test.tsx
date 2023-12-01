import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Test() {
  return (
    <View style={styles.testContainer}>
      <View style={styles.tense}>Tiempo</View>
      <View style={styles.verb}>
        <Text style={styles.pronoun}>Pronoun</Text>
        <Text style={styles.answer}>_________</Text>
        <Text style={styles.hint}>Tap to check the answer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60%',
    padding: 0,
    margin: 0,
    borderRadius: 15,
  },
  tense: {
    borderRadius: 15,
    backgroundColor: '#3E9C2A',
    color: 'white',
    fontSize: 14,
    width: '70%',
    height: '10%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  verb: {
    backgroundColor: '#BDE3BE',
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pronoun: {
    fontSize: 32,
  },
  answer: {
    fontSize: 32,
  },
  hint: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.50)',
  },
});
