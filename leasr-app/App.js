import React from 'react';
import { StyleSheet, Text, View, Image, Logo } from 'react-native';
import MainFooter from './components/MainFooter';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('./assets/leasr-brand-green.jpg')}
        style={styles.imageContainer}
        resizeMode="cover"
      />
      <MainFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64D334',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  imageContainer: {
    width: 300,
    height: 300,

  }
});
