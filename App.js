import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import DefaultNavigator from "./lib/nav/StackNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DefaultNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 16,
  }
});
