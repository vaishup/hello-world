import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import {AppLoading}  from  'expo';


const getFont = () => Font.loadAsync({
    'nunito-regular': require ('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require ('./assets/fonts/Nunito-SemiBold.ttf')

  });

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  //if(FontLoaded){

  
  return (
    <Home/>
  )

 // }else{
    // return(
    //     <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)}></AppLoading>
    // )
  //}
}


