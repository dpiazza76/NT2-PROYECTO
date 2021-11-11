import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

export default ({ navigation }) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '362894200824-c894ukhc2q2tbsu7i63ibcj0klvhjkah.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
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
            </View>
        </View>
        
    )
}