import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Verb() {
  return (
    <View style={styles.verbContainer}>
      <Text style={styles.verb}>verb</Text>
      <Text style={styles.translation}>translation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  verbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C1B97A',
    height: '30%',
  },
  verb: {
    fontSize: 32,
    alignItems: 'center',
  },
  translation: {
    fontSize: 16,
  },
});
