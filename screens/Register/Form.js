import React from 'react'
import {SafeAreaView} from 'react-native'
import { Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
//import {Button, TextInputField} from './components/'
import {useForm, Controller} from 'react-hook-form'

export default () => {
  const {
    control, 
    handleSubmit, 
    formState: {errors, isValid}
  } = useForm({mode: 'onBlur'})
  
  const onSubmit = data => console.log(data)
  
return(
    <SafeAreaView>
      <Controller        
         control={control}        
         name="name"        
         render={({field: {onChange, value, onBlur}}) => (            
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
      <Button title='Enviar' onPress={handleSubmit(onSubmit)}/>
    </SafeAreaView>
  )
}