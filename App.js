import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect} from 'react';
import { View } from 'react-native';
import Routes from './src/routes/index.jsx';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from "expo-splash-screen";
import theme from "./src/global/styles/theme.js"
import { ThemeProvider } from 'styled-components';


export default function App() {
  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold 
  });

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    } 
    prepare();
  },[]);

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();

    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return( 
  <View onLayout={onLayoutRootView} style={{flex:1}}>
      <StatusBar color="light" />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  </View>
  );
}