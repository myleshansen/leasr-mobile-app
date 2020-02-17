import React from 'react';
import { StyleSheet, Text, View, Image, Logo } from 'react-native';
import MainFooter from './components/MainFooter';

import * as Font from 'expo-font';
import MainNavigation from './navigation/MainNavigation';

export default function App() {


  return (
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64D334',
  },
  text: {
    color: 'white',
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
});
