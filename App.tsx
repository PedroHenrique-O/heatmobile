import { StatusBar } from "expo-status-bar";
import React from "react";
import { Home } from "./src/screens/home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { View, Text } from "react-native";
import { MessageList } from "./src/components/MessageList";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
