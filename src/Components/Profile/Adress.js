import React from "react";
import './AdressStyle.css';

function Adress() {
  const street= 'Hedi Nouira'
  const City = 'Ennaser'
  const State = 'Ariana'
  const ZipCode ='2021'
  return (
    <div className="Sarah">
    <p> {street} </p>
    <p> {`${City} ${State} ${ZipCode}`} </p>
    
    </div>
  )
  
}

export default Adress