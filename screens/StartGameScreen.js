import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import Colors from "../constants/colors";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {

  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();  //For continue execution of styling after orientation of device changes

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);  // converting default string input in textinput to int

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {   // isNaN - Is not a number
      Alert.alert(
        'Invalid number!',                                                   // Heading
        'Number has to be a number between 1 and 99',                                  // Message
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]           // Button
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (

    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">

        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>

          <Card>

            <InstructionText>Enter a Number</InstructionText>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />

            <View style={styles.buttonsContainer}>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>

            </View>

          </Card>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceWidth < 380 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})
