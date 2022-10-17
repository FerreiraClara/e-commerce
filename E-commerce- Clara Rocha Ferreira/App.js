import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Products from './web/pages/products';
import Header from './web/pages/header';
import Footer from './web/pages/footer'
import { useFonts, Truculenta_400Regular } from '@expo-google-fonts/truculenta';
import { Brygada1918_700Bold } from '@expo-google-fonts/brygada-1918';

import { Card } from 'react-native-paper';

export default function App() {
  let [fontsLoaded] = useFonts({
    Truculenta_400Regular,
    Brygada1918_700Bold,
  });
  
  return (
    <SafeAreaProvider style={{backgroundColor: "#402d3a"}}>
      <Header />
      <Products />
      <Footer/>
    </SafeAreaProvider>
  );
}
