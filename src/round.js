import { useState , useEffect } from 'react';
import './game.css';
import ReactCardFlip from 'react-card-flip';
import Card from './card.js';

function Round(props) {
  const [isFlipped , setIsFlipped] = useState(false)
  const [show , setShow] = useState("")
  const [turn , setTurn] = useState(1)
  const [agents , setAgents] = useState(props.playersn - props.spiesn)
  const [sarray, setSarray] = useState([])
  const [parray, setParray] = useState([])
  const [array, setArray] = useState([])
  
  
  for (let i = agents ; i > 0 ; i--){
    parray.push('player')
  }
  for (let i = props.spiesn ; i > 0 ; i--){
    sarray.push('spy')
  }
  useEffect(() =>{
  while (parray.length > 0 && sarray.length > 0) {
    let j = Math.floor(Math.random() * 2)
    if (j === 1){
      array.push(parray[0])
      parray.shift()
    }else{
      array.push(sarray[0])
      sarray.shift()
    }
  }
  if (parray.length === 0 && sarray.length > 0){
    while (sarray.length > 0) {
      array.push(sarray[0])
      sarray.shift()
    }
  }else if (parray.length > 0 && sarray.length === 0){
    while (parray.length > 0) {
      array.push(parray[0])
      parray.shift()
    }
  }
  },[])
  
  const flip = () => {
    if (array[0] === "player"){
      setShow(props.word)
      array.shift()
    }else {
      if(props.eng){
        setShow('You are spy')
        array.shift()
      }else{
        setShow('أنت الجاسوس')
        array.shift()
      }
    }
    setIsFlipped(!isFlipped)
  }
  const flipback = () => {
    if(turn === props.playersn){
      props.setRound(!props.round)
    }else{
    setIsFlipped(!isFlipped)
    setTurn(turn + 1)
    }
  }
  
  return (
    <div className="Round">
      <div className={props.eng ? "above" : "abovea"}>
      {props.eng ? "Return you card" : "أدر بطاقتك"}
      <div className="playerturn">
      {!props.eng ? "-" : ""}
      <div>
      {!props.eng ? turn : ""}
      </div>
      <div>
      {props.eng ? "- Player" : "اللاعب -"}
      </div>
      <div>
      {props.eng ? turn : ""}
      </div>
      <div>
      {props.eng ? "-" : ""}
      </div>
      </div>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={flip} className="back" >
          <img 
            src={require('./images/mark.png')}
            className="mark"
          />
        </div>
        <Card  
        sectionn={props.sectionn}
        show={show}
        flipback={flipback}
        />
      </ReactCardFlip>
      <div className="note">
      {(isFlipped && props.eng) ? "Tap to hide your card and pass the phone" : "" }
      {(isFlipped && !props.eng) ? "انقر لإخفاء بطاقتك ومرر الهاتف" : "" }
      </div>
    </div>
  );
}

export default Round;