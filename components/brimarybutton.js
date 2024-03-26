import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Brimarybutton({ children, onpress }) {
  return (
    <View style={styles.buttonoouter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttoninnercontainer, styles.pressed]
            : styles.buttoninnercontainer
        }
        onPress={onpress}
        android_ripple={{ color:Colors.primary600 }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonoouter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttoninnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
