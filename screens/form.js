import React, {useState} from 'react';
import {View, Text, StyleSheet, CheckBox, Button, Alert, Keyboard} from 'react-native';
import { TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function About(props)
{
    const [isSelected, setSelection] = useState(false);
    const [inputText, setInputText] = useState('');

    const changeHandler = (input) =>{
        setInputText(inputText => input);
    }

    const submitHandler = () =>{
        if(inputText.length > 5){
            console.log(inputText);
        }else{
            Alert.alert('Oops', 'Comment must be over 5 chars long');
        }
        if(!isSelected){
            Alert.alert('Oops', 'Option not checked ');
        }
    }

    const keyboardHandler = () =>{
        Keyboard.dismiss();
    }

    return(
        <View style={styles.container}>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text>I'd like to sell</Text>
            </View>

            <TouchableWithoutFeedback onPress={keyboardHandler}>
                <Text>Comment:</Text>
                <TextInput 
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                    placeholder={'Enter a comment'}
                    onChangeText={(val) => changeHandler(val)}
                />  
            </TouchableWithoutFeedback >

            <View style={{margin: 10}} >
                <Button title='Send Request' onPress={submitHandler}/>
            </View>

        </View>    
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    input:{
        borderColor: '#000000',
        borderWidth: 1,
    },
    checkboxContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})