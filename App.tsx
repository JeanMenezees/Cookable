import React from "react";

import { Sora_400Regular, useFonts } from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import RootRoute from "./src/routes/root";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
  });

  return fontsLoaded ? (
    <NavigationContainer>
      <RootRoute />
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
