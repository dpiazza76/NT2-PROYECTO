import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/register_login/Login';
import User from './components/user/User';
import GamePlayed from './components/games_played/GamePlayed';
import {getMockData} from '/home/soporte/Escritorio/proyectoNt2/NT2-PROYECTO/data/usersMock.js'


export default function App() {

  const [totalUsers, setTotalUsers] = useState(getMockData().users)
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(getMockData().partidas)


  return (
    <View style={styles.container}>
      <Login />
      <User users={totalUsers}/>
      <GamePlayed gamesPlayed={totalGamesPlayed} style={styles.gamesPlayed}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamesPlayed:{
    flex: 1,
    fontSize: 10,
    backgroundColor: 'black',
  }
});
