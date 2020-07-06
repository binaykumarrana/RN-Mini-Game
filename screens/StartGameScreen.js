import React, {useState} from 'react';
import {View,
    StyleSheet, 
    Text,
    Button,
     TouchableWithoutFeedback,
      Keyboard,
      Alert
    } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/input';

const StartGameSreen = props => {

    const  [enteredValue, setEnteredValue] = useState('');
    const  [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () =>{
        const chosenNum = parseInt(enteredValue);
        if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
            Alert.alert('Invalid Number!','Number must be between 1-99.',[{text:'OK',style:'destructive', onPress:resetInputHandler}])
        return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNum); 
        setEnteredValue('');

    };

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>Chosen Number: {selectedNumber} </Text>
            
        </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none'
                 autoCorrect={false} 
                 keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value = {enteredValue}
                  />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameSreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        maxWidth:'80%',
        width:300,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:100
    },
    input:{
        width:60,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:16
    }
});