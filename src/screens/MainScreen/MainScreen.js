import React, { Component } from "react";
import { View, Text } from "react-native";

import PickLocation from "../../components/PickLocation/PickLocation";

class MainScreen extends Component {
    render() {
        return (
            <View style={{width: "100%", height: "100%"}}>
                <PickLocation />
            </View>
        );
    }
}

export default MainScreen;