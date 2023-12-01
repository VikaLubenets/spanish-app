import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.textMenu}>Rules</Text>
      <Text style={styles.textMenu}>Verbs</Text>
      <Text style={styles.textMenu}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#A0BEA1',
    alignItems: 'center',
    padding: 10,
  },
  textMenu: {
    fontSize: 24,
  },
});
