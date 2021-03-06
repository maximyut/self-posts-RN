import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { bootstrap } from "./src/bootstrap";
import store from "./src/store";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
