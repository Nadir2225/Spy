import { useState } from 'react';
import './game.css';
import Round from './round.js';
import Count from './count.js';

function Game(props) {
  const [round , setRound] = useState(true)
  
  
  return (
    <div className="Game">
      {round && 
      <Round 
      round={round}
      setRound={setRound}
      word={props.word}
      sectionn={props.sectionn}
      playersn={props.playersn}
      spiesn={props.spiesn}
      eng={props.eng}
      />}
      {!round && 
      <Count 
      handle={() => {
        props.setScreen({
        home: true,
        players: false,
        spies: false,
        time: false,
        sections: false
        })
        props.setGame(false)
      }}
      eng={props.eng}
      timee={props.timee}
      />}
    </div>
  );
}

export default Game;