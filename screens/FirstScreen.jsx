import { View, Image, StyleSheet, Dimensions } from 'react-native';
import TipOfTheDay from '../TipOfTheDay';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/img-1.jpg')}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.overlay}>
        <TipOfTheDay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
