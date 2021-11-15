import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default () => {
    return(
        <View>
            <StatusBar style="auto" />
            <View>
                <Text>Selección de juego</Text>
                <Button title="Snake"/>
            </View>
        </View>
        
    )
}