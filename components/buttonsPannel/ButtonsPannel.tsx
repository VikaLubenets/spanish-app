import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ButtonsPannel() {
  return (
    <View style={styles.buttonsContainer}>
      <Image source={require('../../assets/theme.svg')} style={styles.icon} />
      <Image source={require('../../assets/audio.svg')} style={styles.icon} />
      <Image
        source={require('../../assets/translation.svg')}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '80%',
    height: '8%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    width: '15%',
    resizeMode: 'contain',
  },
});
