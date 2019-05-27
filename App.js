import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import MainScreen from "./src/screens/MainScreen/MainScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <MainScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
