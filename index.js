import React from "react";
import { AppRegistry } from "react-native";

import App from "./App";

const RootComponent = () => <App />;

AppRegistry.registerComponent(
  "React native awesome project",
  () => RootComponent
);
