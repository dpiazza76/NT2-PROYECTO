import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import axios from "axios";


export default ({ navigation }) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '362894200824-c894ukhc2q2tbsu7i63ibcj0klvhjkah.apps.googleusercontent.com',
        iosClientId: '362894200824-0pdtc7096vq81lu0dunduout8phkimgd.apps.googleusercontent.com',
        androidClientId: '362894200824-t4s46ojtue3hvm5h20ler2hhsenmr6e8.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;

          axios.get(`http://localhost:3000/api/users/getToken/${authentication.accessToken}`)
          .then(res => res.json())
          
          .then(data=>{
              console.log("Data de usuario", data)
          })

          }
      }, [response]);

    return(
        <View>

            <StatusBar style="auto" />
            <View>
                <Button
                disabled={!request}
                title="Login con google"
                onPress={() => {
                    promptAsync();
                    }}
                />
                <Button
                title="Login local"
                />
            </View>
        </View>
        
    )
}