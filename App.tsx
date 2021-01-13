import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./src/Routes";
import Chrome from "./src/editor";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Splash from "./src/Splash";
import Practice from "./src/Practice";
import Lesson from "./src/Lesson";
import Home from "./src/Dashboard";
import { Platform } from "react-native";
import LessonList from "./src/Lesson/components/LessonList";

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Dashboard",
      }}
    />
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        title: "Splash Page",
        header: () => null,
      }}
    />
    <Stack.Screen
      name="LessonList"
      component={LessonList}
      options={{
        title: "Lessons",
      }}
    />
    <Stack.Screen
      name="Lesson"
      component={Lesson}
      options={{
        title: "Lesson",
      }}
    />
    <Stack.Screen
      name="Practice"
      component={Practice}
      options={{
        title: "Practice",
      }}
    />
    <Stack.Screen
      name="Chrome"
      component={Chrome}
      options={{
        title: "🧭 Google Chrome",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "white" }}
        >
          <AppNavigator />
        </SafeAreaView>
    </NavigationContainer>

  );
  
};

export default App;
