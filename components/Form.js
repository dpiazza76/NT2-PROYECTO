/* import React from 'react'
import {SafeAreaView, Button, TextInput } from 'react-native'
import {useForm, Controller} from 'react-hook-form'

const LoginScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' })

    const onSubmit = data => console.log(data)

function RegisterForm() {
        return (
            <SafeAreaView>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value, onBlur } }) => (
                        <TextInput
                            iconName="person"
                            iconType="MaterialIcons"
                            placeholder="Ingrese su nombre"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                        />
                    )}
                />
                <Button title='Submit' onPress={handleSubmit(onSubmit)} />
            </SafeAreaView>
        )
    }
}

export default RegisterForm; */