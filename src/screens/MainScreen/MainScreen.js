import React, { Component } from "react";
import { View, Text } from "react-native";

import PickLocation from "../../components/PickLocation/PickLocation";

class MainScreen extends Component {
    state = {
        location: {
            value: null
        }
    }

    locationPickedHandler = location => {
        this.setState(prevState => {
            return {
                location: {
                    ...prevState.location,
                    value: location
                }
            }
        });
    }

    render() {
        return (
            <View style={{width: "100%", height: "100%"}}>
                <PickLocation onLocationPick={this.locationPickedHandler}/>
            </View>
        );
    }
}

export default MainScreen;