import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Card from './components/card/Card';
import ProgressBar from './components/progressBar/ProgressBar';
import ButtonsPannel from './components/buttonsPannel/ButtonsPannel';
import Menu from './components/menu/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar />
      <ButtonsPannel />
      <Card />
      <Menu />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAEAEA',
    gap: 5,
  },
});
