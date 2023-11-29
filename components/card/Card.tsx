import React from 'react';
import { View, StyleSheet } from 'react-native';
import Test from './test/Test';
import Verb from './verb/Verb';

export default function Card() {
  return (
    <View style={styles.card}>
      <Verb />
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
});
