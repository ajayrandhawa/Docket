// HomeScreen.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from './components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.floatingButton}>
        <Image source={require('./assets/add.png')} style={styles.buttonIcon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  buttonIcon: {
    width: 48,
    height: 48,
  },
});

export default HomeScreen;
