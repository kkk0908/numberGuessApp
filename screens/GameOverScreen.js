import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Text Game is Over !</Text>
      <View>
        <Image source={require("../assets/success.jpeg")} style={styles.image} resizeMode="cover" />
      </View>

      <Text>Number of rounds :{props.roundsNumber}</Text>
      <Text>Number was:{props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
