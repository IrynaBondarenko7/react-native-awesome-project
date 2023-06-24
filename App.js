import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./Screens/MainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/MainScreen/ProfileScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/MainScreen/Home";
import { getData } from "./asyncStorage/AsyncStorage";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRouting = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default function App() {
  const [userStatus, setUserStatus] = useState(null);
  const routing = useRouting(userStatus);

  useEffect(() => {
    const fetchData = async () => {
      const status = await getData();
      setUserStatus(status);
    };

    fetchData();
  }, []);
  console.log("App component", userStatus);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
