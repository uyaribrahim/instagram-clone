/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
    <LoginScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({});

export default App;
