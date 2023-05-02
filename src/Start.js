import { useState } from 'react';
import { Avatar } from '@mui/material';
import './Start.css';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbSpy , TbNotebook } from 'react-icons/tb';
import { BiTimer } from 'react-icons/bi';
import { RiSearchEyeLine } from 'react-icons/ri';
import english from './images/english.jpg';
import arabic from './images/arabic.jpg';

function Start(props) {
  const eng = props.eng
  const setEng = props.setEng
  const selectedItems = props.selectedItems
  
  
  return (
    <div className="Start">
      <div className={eng ? "title" : "titlea"}>
      {eng ? "Configure your game" : "إعدادات اللعبة"}
      </div>
      <div className="square1" onClick={() => {props.setScreen({
       home: false,
       players: true,
       spies: false,
       time: false,
       sections: false
      })}}>
        <div className={eng ? "general pple": "general pplea"}>
        {eng ? <BsFillPeopleFill className="pplei" /> : ""}
        {eng ? "Number of player" : "عدد اللاعبين"}
        {eng ? "" : <BsFillPeopleFill className="ppleia" />}
        </div>
        <div className={eng ? "general ppleN" : "general ppleNa"}>
         {props.playersn}
        </div>
      </div>
      <div className="square2" onClick={() => {props.setScreen({
       home: false,
       players: false,
       spies: true,
       time: false,
       sections: false
      })}}>
        <div className={eng ? "general2 pple2" : "general2 pple2a"}>
        {eng ? <TbSpy className="pplei" /> : ""}
        <div>
        <div>{eng ? "Number" : ""}</div>
        {eng ? "of spies" : "عدد الجواسيس"}
        </div>
        {eng ? "" : <TbSpy className="pplei" />}
        </div>
        <div className={eng ? "general2 ppleN2" : "general2 ppleN2a"} >
         {props.spiesn}
        </div>
      </div>
      <div className="square3" onClick={() => {props.setScreen({
       home: false,
       players: false,
       spies: false,
       time: false,
       sections: true
      })}}>
        <div className={eng ? "general pple3" : "general pple3a"}>
        {eng ? <TbNotebook className="pplei" /> : ""}
          {eng ? "Sections" : "مجموعات"}
        {eng ? "" : <TbNotebook className="pplei" />}  
        </div>
        <div className={eng ? "general ppleN3" : "general ppleN3a"}>
         {selectedItems.length}
        </div>
      </div>
      <div className="square4" onClick={() => {props.setScreen({
       home: false,
       players: false,
       spies: false,
       time: true,
       sections: false
      })}}>
        <div className={eng ? "general2 pple4" : "general2 pple4a"}>
        {eng ? <BiTimer className="pplei" /> : ""}
        <div>
        <div>{eng ? "Stop" : ""}</div>
        {eng ? "timer" : "عداد الانتهاء"}
        {eng ? "" : <BiTimer className="ppleia2" />}
        </div>
        </div>
        <div className={eng ? "general2 ppleN4" : "general2 ppleN4a"}>
         {eng ? `${props.time}m` : `${props.time}د`}
        </div>
      </div>
      <div className="square5" onClick={props.startg}>
        <div className={eng ? "labels" : "labelsa"}>
        {eng ? "start" : "بدء"}
        <RiSearchEyeLine className={eng ? "" : "starta"}/>
        </div>
      </div>
      <Avatar className="lang" src={eng ? english : arabic} onClick={()=>setEng(!eng)}/>
    </div>
  );
}

export default Start;