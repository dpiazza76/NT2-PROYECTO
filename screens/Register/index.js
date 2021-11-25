import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <View style={styles.button}>
                    <Button title="Registrarse con Google" />
                </View>
                <View style={styles.button}>
                    <Button title="Registrarse de manera local"
                        onPress={() => navigation.navigate("Form")}
                    />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#0e101c",
    },
    button: {
        marginTop: 40,
        color: "white",
        height: 40,
        backgroundColor: "#ec5990",
        borderRadius: 4,
      },
})