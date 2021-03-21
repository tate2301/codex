import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import firebase from  './lib/__firebase'

import { Routes } from "./src/Routes";
import Chrome from "./src/editor";
import { SafeAreaView } from "react-native-safe-area-context";
import Splash from "./src/Splash";
import Practice from "./src/Practice";
import Lesson from "./src/Lesson";
import Home from "./src/Dashboard";
import LessonList from "./src/Lesson/components/LessonList";
import Login from "./src/Auth/Login";
import SignUp from "./src/Auth/Signup";
import Profile from "./src/Profile";
import Compiler from "./src/compiler/Compiler";
import VideoView from "./src/Lesson/components/LessonVideoView";

const Stack = createStackNavigator<Routes>();
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator(); 
const ProfileStack = createStackNavigator();

const AuthStackNavigation = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        title: "Sign up",
        header: () => {}
      }}
    />
    
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Sign in",
        header: () => {}
      }}
    />

  </AuthStack.Navigator>
)

const HomeStackNavigation = () => (
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
      options={({route}) => ({
        title: "Summary",
      })}
    />
    <Stack.Screen
      name="VideoView"
      component={VideoView}
      options={({route}) => ({
        title: "Lecture",
      })}
    />
    <Stack.Screen
      name="Lesson"
      component={Lesson}
      options={({route}) => ({
        title: route.params?.name,
      })}
    />
    <Stack.Screen
      name="Practice"
      component={Practice}
      options={{
        title: "Practice",
      }}
    />
    <Stack.Screen
      name="Compiler"
      component={Compiler}
      options={{
        title: "Playground"
      }}/>
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

const ProfileStackNavigation = () => ( 
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsNavigation = () => ( 
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackNavigation} />
    <Tabs.Screen name="Profile" component={ProfileStackNavigation} />
  </Tabs.Navigator>
)

const App = () => {
  const [userToken, setUserToken] = useState<any>(null)

  useEffect(() => {


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserToken(user.uid)
        console.log("Logged in")
        // ...
      } else {
        setUserToken(null)
      }
    });
  }, [])

  
  return (
    <NavigationContainer>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "white" }}>
          {
            userToken ?
              <HomeStackNavigation />
              :
              <AuthStackNavigation />
          }
          
        </SafeAreaView>
    </NavigationContainer>

  );
  
};

export default App;
