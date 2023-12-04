import React from 'react';
import { View, StyleSheet } from 'react-native';
import Test from './test/Test';
import Verb from './verb/Verb';
import { useAppDispatch } from '../../data/hooks/redux';
import { useGetDataQuery } from '../../api/api';

export default function Card() {
  const dispatch = useAppDispatch();
  const { data: searchResults } = useGetDataQuery();
  console.log(searchResults);

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
    height: '60%',
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
  },
});
