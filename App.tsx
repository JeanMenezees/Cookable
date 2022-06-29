import React from "react";

import { Sora_400Regular, useFonts } from "@expo-google-fonts/sora";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import TabRoute from "./src/routes/tab";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
  });

  return fontsLoaded ? (
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
