import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { Root } from "native-base";
// Component
import HomePage from "./Components/HomePage";

import Nav from "./Navigation";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false,
    };
  }

  componentDidMount() {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }

    return (
      <Root>
        <HomePage />
      </Root>
    );
  }
}

export default App;
