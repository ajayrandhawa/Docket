// Header.js

import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>Tasks</Text>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/sort.png')} style={styles.sort} resizeMode="stretch" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 35,
    maxHeight: 35,
    marginRight: 5,
  },
  logoText: {
    paddingTop: 3,
    color: 'black',
    fontSize: 40,
    fontFamily: 'Outfit-Bold'
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 10,
  },
  sort:{
    padding : 0,
    margin : 0,
    maxWidth: 35,
    maxHeight: 35
  }
});

export default Header;
