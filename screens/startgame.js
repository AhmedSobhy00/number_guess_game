import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Brimarybutton from "../components/brimarybutton";
import colors from "../constants/colors";
export default function Startgame({onpickednum}) {
  const [enternum, setenternum] = useState("");

  function numunputhandl(entertext) {
    setenternum(entertext);
  }

  function resetinput() {
    setenternum("");
  }

  function confirminputhandle() {
    const chosennum = parseInt(enternum);
    if (isNaN(chosennum) || chosennum <= 0 || chosennum > 99) {
      Alert.alert("Invalid num", "num must be 0 to 99", [
        { text: "okay", style: "default", onPress: resetinput },
        { text: "also okay", style: "destructive", onPress: resetinput },
      ]);
      return;
    }
    onpickednum(chosennum);
  }
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputbox}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enternum}
        onChangeText={numunputhandl}
      />
      <View style={styles.buttonscontain}>
        <View style={styles.buttoncontainer}>
          <Brimarybutton onpress={resetinput}>Reset</Brimarybutton>
        </View>
        <View style={styles.buttoncontainer}>
          <Brimarybutton onpress={confirminputhandle}>Confirm</Brimarybutton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginHorizontal: 26,
    padding: 16,
    marginTop: 100,
    backgroundColor: colors.primary800 ,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonscontain: {
    flexDirection: "row-reverse",
  },
  buttoncontainer: {
    flex: 1,
  },
});
