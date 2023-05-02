import { useState , useEffect } from 'react';
import './game.css';
import { GiStopwatch } from 'react-icons/gi';


function Count(props) {
  let [tim ,setTim] = useState(props.timee * 60)
  const [finish , setFinish] = useState(false)
  const [secs1 ,setSecs1]  = useState(tim % 60)
  const [mins1 ,setMins1]  = useState(Math.floor(tim / 60))
  const [secs2 ,setSecs2]  = useState('0'+secs1)
  const [mins2 ,setMins2]  = useState((mins1 < 10) ? '0'+mins1 : mins1)
  
  const updateCountdown = () => {
    setSecs1(tim % 60)
    setMins1(Math.floor(tim / 60))
    if(secs1 < 10){
      setSecs2('0'+secs1)
    }else{
      setSecs2(secs1)
    }
    if(mins1 < 10){
      setMins2('0'+mins1)
    }else{
      setMins2(mins1)
    }
    setTim(tim - 1)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if(mins1 === 0 && secs1 === 0){
        setSecs2('00')
        setMins2('00')
        setFinish(true)
      }else{
      setSecs1('')
      setMins1('')
      setSecs2('')
      setMins2('')
      updateCountdown()
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [updateCountdown]);
  
    
  
  

  return (
    <div className="Count">
      <div className={finish ? "lasttitle redtim" : "lasttitle"}>
      {props.eng ? "Time left" : "الوقت المتبقي"}
      </div>
      <div className={finish ? "lastwatch redtim" : "lastwatch"}>
      <GiStopwatch />
      </div>
      <div className={finish ? "tim redtim" : "tim"}>
      {mins2}:{secs2}
      </div>
      <div onClick={props.handle} className={finish ? "replay" : ""}>
      {!finish ? "" : props.eng ? "New game" : "لعبة جديدة"}
      </div>
    </div>
  );
}

export default Count;