import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center'
  },
});
