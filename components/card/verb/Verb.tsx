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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C1B97A',
  },
  verb: {
    fontSize: 32,
  },
  translation: {
    fontSize: 16,
  },
});
