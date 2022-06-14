import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TemplateScreenProps } from "./props";

export default function TemplateScreen(
  props: TemplateScreenProps
): JSX.Element {
  return (
    <SafeAreaView style={props.safeAreaViewStlye}>
      <StatusBar />
      {props.children}
    </SafeAreaView>
  );
}
