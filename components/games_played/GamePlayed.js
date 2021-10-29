import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';


export default function GamePlayed({gamesPlayed}) {

      return (
        <SafeAreaView>
          <FlatList
            data={gamesPlayed}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}