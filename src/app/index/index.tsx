import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "../../theme";

import { Loading } from "@components/Loading";
import { Routes } from "../../routes/index";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
