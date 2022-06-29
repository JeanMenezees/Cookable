import React, { useEffect, useState } from "react";

import { Sora_400Regular } from "@expo-google-fonts/sora";

import { NavigationContainer } from "@react-navigation/native";
import RootRoute from "./src/routes/root";

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  
  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync('Sora Regular', Sora_400Regular);
    }
    catch(err: any) {
      console.log(err);
    }
    finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  useEffect(() => {
    if(appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootRoute />
    </NavigationContainer>
  );
}
