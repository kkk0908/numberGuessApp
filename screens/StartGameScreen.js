import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Color from "../constants/color";
import Input from "../components/input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.nativeEvent.text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmedInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Input!", "Number Should be between 0 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
    // the value update during the render so we can write above 3 line in any order
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    );
  }
  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    <View style={styles.screen}>
      <Text style={styles.title}>The a New Game !</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChange={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={styles.button}
              title="Reset"
              onPress={resetInputHandler}
              color={Color.accent}
            />
          </View>
          <View>
            <Button
              style={styles.button}
              title="Confirm"
              onPress={confirmedInputHandler}
              color={Color.primary}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    fontFamily: "open-sans-bold",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 120,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
