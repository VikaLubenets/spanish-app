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
    backgroundColor: '#EAEAEA',
    width: '80%',
    height: '50%',
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
  },
});
