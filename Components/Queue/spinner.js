import React, { Component } from "react";

import { Button, Content, Icon, Text } from "native-base";
import { View } from "react-native";

//Stores
import socketStore from "../../Stores/scoketStore";

import styles from "./styles.js";

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 6,
      numOfGuests: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    var num = this.state.numOfGuests;
    console.log("num", this.state.numOfGuests);
    if (num < this.state.max) {
      num = num + 1;
      this.setState({ numOfGuests: num });
    }
  }

  decrement() {
    var num = this.state.numOfGuests;
    if (num > 1) {
      num = num - 1;
      this.setState({ numOfGuests: num });
    }
  }

  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 300 }}>
        <Icon style={styles.white} active type="Entypo" name="user" />
        <Button style={styles.actionButton} onPress={() => this.decrement()}>
          <Text style={styles.buttonText}>-</Text>
        </Button>
        <Text style={styles.numText}>{this.state.numOfGuests}</Text>
        <Button style={styles.actionButton} onPress={() => this.increment()}>
          <Text style={styles.buttonText}>+</Text>
        </Button>

        <Button
          rounded
          light
          style={{ marginLeft: 15 }}
          onPress={() =>
            socketStore.addToQ(
              this.props.user,
              this.props.restaurant,
              this.state.numOfGuests
            )
          }
        >
          <Text>Join Q</Text>
        </Button>
      </View>
    );
  }
}

export default Spinner;
