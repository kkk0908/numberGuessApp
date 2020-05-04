import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return <View style={{ ...props.style, ...styles.card }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20
  }
});
export default Card;
