import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login() {
    return(

        <View style={styles.Button}>
          <Button
            title= "Iniciar sesión"
            //onPress={}
          />
            <Button
            title="Registrarse"
            //onPress={}
          />
            </View>       
)}


const styles = StyleSheet.create({
    Button:{
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        padding: 10
    }
    
})