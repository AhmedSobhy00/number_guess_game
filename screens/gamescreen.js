import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title1 from "../components/title";
import Numbercontainer from "../components/numbercontainer";
import Brimarybutton from "../components/brimarybutton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minboundry = 1;
let maxboundry = 100;
export default function Gamescreen({ userNumber, ongameover }) {
  const intialguess = generateRandomBetween(1, 100, userNumber);
  const [currntguess, setcurrntguess] = useState(intialguess);

  useEffect(() => {
    if (currntguess === userNumber) {
      
      ongameover();
    }
  }, [currntguess, userNumber, ongameover]);

  function nextguisshandler(direction) {
    if (
      (direction === "lower" && currntguess < userNumber) ||
      (direction === "higher" && currntguess > userNumber)
    ) {
      Alert.alert("Dont lie!!", "UK this is WRONG...", [{ text: "sorry!" }]);
      return;
    }
    if (direction === "lower") {
      maxboundry = currntguess;
    } else {
      minboundry = currntguess + 1;
    }
    const newrandomnum = generateRandomBetween(
      minboundry,
      maxboundry,
      currntguess
    );
    setcurrntguess(newrandomnum);
  }
  return (
    <View style={styles.screen}>
      <Title1>opponet guess</Title1>
      <Numbercontainer>{currntguess}</Numbercontainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonconntain}>
          <Brimarybutton
            onpress={nextguisshandler.bind(this, "higher")}
            style={styles.button}
          >
            +
          </Brimarybutton>
          <Brimarybutton
            onpress={nextguisshandler.bind(this, "lower")}
            style={styles.button}
          >
            -
          </Brimarybutton>
        </View>
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flix: 1,
    padding: 40,
  },
  buttonconntain: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
