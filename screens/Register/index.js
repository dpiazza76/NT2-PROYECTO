import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return(
        <View>
            <StatusBar style="auto" />
            <View>
                <Button title="Registrarse con Google"/>
                <Button title="Registrarse de manera local"
                onPress={() => navigation.navigate("Form")}
                />
            </View>
        </View>
        
    )
}