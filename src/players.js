import { useState } from 'react';
import './players.css';

function Players(props) {
  const single = props.single
  const setSingle = props.setSingle
  const increase = () => {
    if (props.playersn === 15) {
      return
    } else {
      props.setPlayersn(props.playersn + 1)
      if (props.playersn > 8) {
      setSingle(false)
      }else {
      return
      }
    }
  }
  const decrease = () => {
    if (props.playersn === 3 || (props.playersn / props.spiesn) === 2) {
      return
    } else {
      props.setPlayersn(props.playersn - 1)
      if (props.playersn < 11) {
      setSingle(true)
      }else {
      return
      }
    }
  }
  
  return (
    <div className="players">
      <div className={props.eng ? "specifyp" : "specifypa"}>
      {props.eng ? "Specify the number of players in the game" : "حدد عدد الاعبين في اللعبة"}
      </div>
      <div className="counter">
      <div className={single ? "number": "number2"}>{props.playersn}</div>
      </div>
      <div className="increase" onClick={increase}>
      <div className="sign1">+</div>
      </div>
      <div className="decrease" onClick={decrease}>
      <div className="sign2">_</div>
      </div>
      <div className="confirm" onClick={() => {props.setScreen({
       home: true,
       players: false,
       spies: false,
       time: false,
       sections: false
      })}}>
      {props.eng ? "Confirm" : "تأكيد"}
      </div>
    </div>
  );
}

export default Players;