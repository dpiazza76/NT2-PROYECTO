import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TouchableOpacity } from "react-native-gesture-handler";
import Food from "./Food";
import Head from "./Head";
import Tail from "./Tail";
import Constants from "../../Constants";
import GameLoop from "./GameLoop/SnakeGameLoop";
import { Audio } from "expo-av";

export default function Snake() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const initialPos = Math.floor(Constants.GRID_SIZE / 2);
  const [isGameRunning, setIsGameRunning] = useState(true);

  const [score, setScore] = useState(0);
  // Should initialize the value with score from db -> axios.get...
  const [highScore, setHighScore] = useState(score);

  const updateHighScore = () => {
    if (score > highScore) setHighScore(score);
  };

  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //sonido

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/background_music.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const resetGame = () => {
    engine.current.swap({
      head: {
        position: [initialPos, initialPos],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Head />,
      },
      food: {
        position: [
          randomPositions(0, Constants.GRID_SIZE - 1),
          randomPositions(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Food />,
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail />,
      },
    });
    playSound();
    setIsGameRunning(true);
  };
  return (
    <View style={styles.canvas}>
      {/* <StatusBar style="auto" /> */}

      <GameEngine
        ref={engine}
        style={{
          width: BoardSize,
          height: BoardSize,
          flex: null,
          backgroundColor: "white",
        }}
        entities={{
          head: {
            position: [initialPos, initialPos],
            size: Constants.CELL_SIZE,
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 0,
            yspeed: 0,
            renderer: <Head />,
          },
          food: {
            position: [
              randomPositions(0, Constants.GRID_SIZE - 1),
              randomPositions(0, Constants.GRID_SIZE - 1),
            ],
            size: Constants.CELL_SIZE,
            renderer: <Food />,
          },
          tail: {
            size: Constants.CELL_SIZE,
            elements: [],
            renderer: <Tail />,
          },
        }}
        systems={[GameLoop]}
        running={isGameRunning}
        onEvent={(e) => {
          switch (e) {
            case "game-over":
              alert("Game over!");
              setIsGameRunning(false);
              setScore(0);
              updateHighScore();
              setSound(undefined);

              return;
            case "ate-food":
              setScore(score + 1);
              return;
          }
        }}
      />
      <View style={styles.controlContainer}>
        <View style={styles.controllerRow}>
          <TouchableOpacity onPress={() => engine.current.dispatch("move-up")}>
            <View style={styles.controlBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-left")}
          >
            <View style={styles.controlBtn} />
          </TouchableOpacity>
          <View style={[styles.controlBtn, { backgroundColor: null }]} />
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-right")}
          >
            <View style={styles.controlBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-down")}
          >
            <View style={styles.controlBtn} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.score}>Total score: {score}</Text>
      <Text style={styles.score}>High score: {highScore}</Text>
      {!isGameRunning && (
        <TouchableOpacity onPress={resetGame}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 22,
              padding: 10,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
          >
            Start New Game
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  controlContainer: {
    marginTop: 10,
  },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "yellow",
    width: 100,
    height: 100,
  },
  score: {
    color: "white",
    marginTop: 15,
    fontSize: 22,
    padding: 10,
    borderRadius: 10,
  },
});
