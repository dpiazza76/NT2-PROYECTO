import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginButtons() {
  const navigation = useNavigation();
    return(

        <View style={styles.Button}>
          <Button
            title= "Iniciar sesión"
            onPress={() => navigation.navigate("Login")}
          />
            <Button
            title="Registrarse"
            onPress={() => navigation.navigate("Register")}
          />
            </View>       
)}


const styles = StyleSheet.create({
    Button:{
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: 'center',
        marginTop: 20,
        padding: 10
    }
    
})