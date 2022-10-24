import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <Image source={require('../assets/doc_icon.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 140,
    marginBottom: 8,
  },
});
