import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Startgame from "./screens/startgame";
import Gamescreen from "./screens/gamescreen";
import colors from "./constants/colors";
import Gameoverscreen from "./screens/gameover";

export default function App() {
  const [usernum, setunernum] = useState();
  const [gameover, setgameover] = useState(true);

  function pickednumberhandler(pickednum) {
    setunernum(pickednum);
    setgameover(false);
  }

  function gameoverhandl() {
    setgameover(true);
  }

  let screen = <Startgame onpickednum={pickednumberhandler} />;
  if (usernum) {
    screen = <Gamescreen ongameover={gameoverhandl} userNumber={usernum} />;
  }
  if (gameover && usernum) {
    screen = <Gameoverscreen />;
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.rootcreen}
    >
      <ImageBackground
        style={styles.rootcreen}
        source={require("./assets/ghost.jpg")}
        resizeMode="cover"
        imageStyle={styles.img}
      >
        <SafeAreaView style={styles.rootcreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootcreen: {
    flex: 1,
  },
  img: {
    opacity: 0.15,
  },
});
