/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "../components/Text";

const Splash = ({ navigation }: any) => {

  const getStarted = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={style.container}>
      <View style={style.textArea}>
        <Text>
          Welcome to the CodeSchool Go
        </Text>
        <Text>
          This CodeSchool companion app gives you access to daily practice,
          articles and more so you can learn to code anytime, anywhere.
        </Text>
      </View>
      <TouchableOpacity onPress={getStarted}>
        <Text>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    padding: 32,
  },
});

export default Splash;
