import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameSreen from './screens/StartGameScreen';
import GameStart from './screens/GameStart';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewgameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) =>{
      setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
      setGuessRounds(numOfRounds);
  };

  let content = <StartGameSreen onStartGame={startGameHandler}/>;
  if(userNumber && guessRounds <= 0){
    content=<GameStart userChoice={userNumber} onGameOver={gameOverHandler} />;
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewgameHandler}/>;
  }

  return (
    <View style={styles.screen}>
        <Header title="Guess a Number"/>
        {content}
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
      flex:1
    }
});
