import { useState } from 'react';
import './players.css';

function Time(props) {
  const single = props.single
  const setSingle = props.setSingle
  const increase = () => {
    if (props.time === 10) {
      return
    } else {
      props.setTimee(props.time + 1)
      if (props.time > 8) {
      setSingle(false)
      }else {
      return
      }
    }
  }
  const decrease = () => {
    if (props.time === 1) {
      return
    } else {
      props.setTimee(props.time - 1)
      if (props.time < 11) {
      setSingle(true)
      }else {
      return
      }
    }
  }
  
  return (
    <div className="players">
      <div className="counter">
      <div className={single ? "number": "number2"}>{props.time}</div>
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

export default Time;