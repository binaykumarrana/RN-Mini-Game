import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const GameOverScreen = props =>{
    return(
        <View style ={styles.screen}> 
            <Text>Game is Over!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
