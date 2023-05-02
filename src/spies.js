import { useState } from 'react';
import './players.css';

function Spies(props) {
  const single = props.single
  const setSingle = props.setSingle
  const increase = () => {
    if (props.spiesn === 7 || (props.playersn - (props.spiesn * 2)) <= 1) {
      return
    } else {
      props.setSpiesn(props.spiesn + 1)
    }
  }
  const decrease = () => {
    if (props.spiesn === 1) {
      return
    } else {
      props.setSpiesn(props.spiesn - 1)
    }
  }
  
  return (
    <div className="players">
      <div className={props.eng ? "specifyp" : "specifypa"}>
      {props.eng ? "Specify the number of spies in the game" : "حدد عدد الجواسيس في اللعبة"}
      </div>
      <div className="counter">
      <div className="number">{props.spiesn}</div>
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

export default Spies;