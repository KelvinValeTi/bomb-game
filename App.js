import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/pages/Start/index.jsx';
import Rules from './src/pages/Rules/index.jsx';


export default function App() {
  return <>
      <StatusBar color="light" />
    <Rules></Rules>
  </>
}