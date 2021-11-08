import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import LoginButtons from '../../components/LoginButtons';

export default ({ navigation }) => {
    return(
        <View>
            <StatusBar style="auto" />
            <View>
                <Text style={styles.Texto}> Bienvenido a juegos. Inicie sesión o regístrese para continuar</Text>
            </View>
            <LoginButtons />
        </View>
        
    )
}

const styles = StyleSheet.create({
    Button:{
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 10
    },
    Texto:{
        marginBottom: 10
    }
    
})