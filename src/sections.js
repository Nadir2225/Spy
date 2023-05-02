import { useState } from 'react';
import { GiMountainRoad } from 'react-icons/gi';
import { MdSportsVolleyball , MdPlace , MdEmojiObjects , MdPets } from 'react-icons/md';
import { BiRestaurant } from 'react-icons/bi';
import { BsFillFlagFill , BsCheckCircleFill , BsCircle } from 'react-icons/bs';
import { IoIosColorPalette } from 'react-icons/io';
import { AiFillCar , AiFillCheckCircle } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import { GiSpiralBottle } from 'react-icons/gi';
import './section.css';

function Section(props) {
  const selected = props.selected
  const setSelected = props.setSelected
  const selectedItems= props.selectedItems
  const setSelectedItems= props.setSelectedItems
  const select = (theme) => {
    if ((selectedItems.length === 1) &&
    ((theme === "countries" && selected.countries === true )
    ||(theme === "objects" && selected.objects === true)
    ||(theme === "sports" && selected.sports === true)
    ||(theme === "places" && selected.places === true)
    ||(theme === "colors" && selected.colors === true)
    ||(theme === "transport" && selected.transport === true)
    ||(theme === "educ" && selected.educ === true)
    ||(theme === "nature" && selected.nature === true)
    ||(theme === "animals" && selected.animals === true)
    ||(theme === "beauty" && selected.beauty === true)
    ||(theme === "cuisine" && selected.cuisine === true)
    )) {
      alert('you have to select at least on section')
    }else {
    if (theme === "countries") {
    setSelected({
        ...selected,
      countries: !selected.countries
      })
      if (selected.countries === false){
        setSelectedItems([...selectedItems , "countries"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "countries") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "objects") {
    setSelected({
        ...selected,
      objects: !selected.objects
      })
      if (selected.objects === false){
        setSelectedItems([...selectedItems , "objects"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "objects") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "sports") {
    setSelected({
        ...selected,
      sports: !selected.sports
      })
      if (selected.sports === false){
        setSelectedItems([...selectedItems , "sports"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "sports") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "places") {
    setSelected({
        ...selected,
      places: !selected.places
      })
      if (selected.places === false){
        setSelectedItems([...selectedItems , "places"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "places") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "colors") {
    setSelected({
        ...selected,
      colors: !selected.colors
      })
      if (selected.colors === false){
        setSelectedItems([...selectedItems , "colors"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "colors") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "transport") {
    setSelected({
        ...selected,
      transport: !selected.transport
      })
      if (selected.transport === false){
        setSelectedItems([...selectedItems , "transport"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "transport") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "educ") {
    setSelected({
        ...selected,
      educ: !selected.educ
      })
      if (selected.educ === false){
        setSelectedItems([...selectedItems , "educ"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "educ") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "beauty") {
    setSelected({
        ...selected,
      beauty: !selected.beauty
      })
      if (selected.beauty === false){
        setSelectedItems([...selectedItems , "beauty"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "beauty") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "cuisine") {
    setSelected({
        ...selected,
      cuisine: !selected.cuisine
      })
      if (selected.cuisine === false){
        setSelectedItems([...selectedItems , "cuisine"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "cuisine") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "nature") {
    setSelected({
        ...selected,
      nature: !selected.nature
      })
      if (selected.nature === false){
        setSelectedItems([...selectedItems , "nature"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "nature") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else if (theme === "animals") {
    setSelected({
        ...selected,
      animals: !selected.animals
      })
      if (selected.animals === false){
        setSelectedItems([...selectedItems , "animals"])
      }else {
        let newArray = []
        selectedItems.map(item => {
          if (item === "animals") {
            return
          }else {
            newArray.push(item)
          }
        })
        setSelectedItems(newArray)
      }
    }else {
    return
  }
    }
  }
  return (
    <div className="Section">
      <div className={props.eng ? "sectitle" : "sectitlea"}>
      {props.eng ? "Specify your sections" : "حدد المجموعات"}
      </div>
      <div className="seccont">
        <div 
        className="sec sec1"
        onClick={()=> select("countries")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Countries" : "بلدان"}
          </div>
          <div className="secbot">
            {props.eng ? <BsFillFlagFill 
            className="secicon"
            /> : "" }
            {selected.countries ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <BsFillFlagFill 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec2"
        onClick={()=> select("objects")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Objects" : "جماد"}
          </div>
          <div className="secbot">
            {props.eng ? <MdEmojiObjects 
            className="secicon"
            /> : ""}
            {selected.objects ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <MdEmojiObjects 
            className="secicon"
            /> : ""}
          </div>
        </div>
        <div 
        className="sec sec3"
        onClick={()=> select("sports")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Sports" : "رياضات" }
          </div>
          <div className="secbot">
            {props.eng ? <MdSportsVolleyball 
            className="secicon"
            /> : "" }
            {selected.sports ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <MdSportsVolleyball 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec4"
        onClick={()=> select("colors")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Colors" : "ألوان"}
          </div>
          <div className="secbot">
            {props.eng ? <IoIosColorPalette 
            className="secicon"
            /> : "" }
            {selected.colors ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <IoIosColorPalette 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec5"
        onClick={()=> select("educ")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Educaion" : "التعليم" }
          </div>
          <div className="secbot">
            {props.eng ? <IoSchool 
            className="secicon"
            /> : "" }
            {selected.educ ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <IoSchool 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec6"
        onClick={()=> select("transport")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Transport" : "وسائل النقل"}
          </div>
          <div className="secbot">
            {props.eng ? <AiFillCar 
            className="secicon"
            /> : "" }
            {selected.transport ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <AiFillCar 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec7"
        onClick={()=> select("places")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Places" : "أماكن" }
          </div>
          <div className="secbot">
            {props.eng ? <MdPlace 
            className="secicon"
            /> : "" }
            {selected.places ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <MdPlace 
            className="secicon"
            /> : "" }
          </div>
        </div>
        <div 
        className="sec sec8"
        onClick={()=> select("nature")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Nature" : "الطبيعة" }
          </div>
          <div className="secbot">
            {props.eng ? <GiMountainRoad 
            className="secicon"
            /> : ""}
            {selected.nature ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <GiMountainRoad 
            className="secicon"
            /> : ""}
          </div>
        </div>
        <div 
        className="sec sec9"
        onClick={()=> select("cuisine")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Cuisine" : "المطبخ" }
          </div>
          <div className="secbot">
            {props.eng ? <BiRestaurant 
            className="secicon"
            /> : ""}
            {selected.cuisine ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <BiRestaurant 
            className="secicon"
            /> : ""}
          </div>
        </div>
        <div 
        className={props.eng ? "sec" : "sec sec10"}
        onClick={()=> select("beauty")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Beauty" : "تجميل" }
          </div>
          <div className="secbot">
            {props.eng ? <GiSpiralBottle 
            className="secicon"
            /> : ""}
            {selected.beauty ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <GiSpiralBottle 
            className="secicon"
            /> : ""}
          </div>
        </div>
        <div 
        className="sec sec11"
        onClick={()=> select("animals")}
        >
          <div className={props.eng ? "sectop" : "sectopa"} >
          {props.eng ? "Animals" : "حيوانات" }
          </div>
          <div className="secbot">
            {props.eng ? <MdPets 
            className="secicon"
            /> : ""}
            {selected.animals ? <BsCheckCircleFill /> : <BsCircle /> }
            {!props.eng ? <MdPets 
            className="secicon"
            /> : ""}
          </div>
        </div>
      </div>
      <div className="secconfirm" onClick={() => {props.setScreen({
       home: true,
       players: false,
       spies: false,
       time: false,
       sections: false
      })}}>
      {props.eng ? "confirm" : "تأكيد"}
      </div>
    </div>
  );
}

export default Section;