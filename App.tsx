/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => (
  <SafeAreaProvider style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({});

export default App;
