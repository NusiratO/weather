import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

import SearchInput from './Components/SearchInput';


export default class Part2 extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Text style={[styles.largeText, styles.textStyle]}>
        New York
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Cloud
      </Text>
      <Text style={[styles.largeText, styles.textStyle]}>24*</Text>
      <SearchInput placeholder="Search any city"/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      andriod: {
        fontFamily: 'Roboto',
      },
    }),
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
