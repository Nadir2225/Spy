import React from 'react';
import './card.css';
import { GiMountainRoad } from 'react-icons/gi';
import { MdSportsVolleyball , MdPlace , MdEmojiObjects , MdPets } from 'react-icons/md';
import { BiRestaurant } from 'react-icons/bi';
import { BsFillFlagFill } from 'react-icons/bs';
import { IoIosColorPalette } from 'react-icons/io';
import { AiFillCar } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import { GiSpiralBottle } from 'react-icons/gi';
import { TbSpy } from 'react-icons/tb';


function Card(props) {

  return (
    <div onClick={props.flipback} className={(props.show === "You are spy" || props.show === "أنت الجاسوس") ? "Card red" : "Card"}>
      {(props.show === "You are spy" || props.show === "أنت الجاسوس") ? (
      <TbSpy className="cardicon"/>
      ) : (props.sectionn === "countries") ? (
      <BsFillFlagFill className="cardicon"/>
      ) : (props.sectionn === "objects") ? (
      <MdEmojiObjects className="cardicon"/>
      ) : (props.sectionn === "sports") ? (
      <MdSportsVolleyball className="cardicon"/>
      ) : (props.sectionn === "colors") ? (
      <IoIosColorPalette className="cardicon"/>
      ) : (props.sectionn === "educ") ? (
      <IoSchool className="cardicon"/>
      ) : (props.sectionn === "transport") ? (
      <AiFillCar className="cardicon"/>
      ) : (props.sectionn === "places") ? (
      <MdPlace className="cardicon"/>
      ) : (props.sectionn === "animals") ? (
      <MdPets className="cardicon"/>
      ) : (props.sectionn === "nature") ? (
      <GiMountainRoad className="cardicon"/>
      ) : (props.sectionn === "beauty") ? (
      <GiSpiralBottle className="cardicon"/>
      ) : (props.sectionn === "cuisine") ? (
      <BiRestaurant className="cardicon"/>
      ) :"" }
      <div>{props.show}</div>
    </div>
  );
}

export default Card;