import { useState } from "react";
import { Die } from "./Die";

export function MainApp(){

    const[dice, setDice] = useState(generateAllNewDice)


   function generateAllNewDice(){
    return new Array(10).fill(0)
    .map(() => ({value: Math.ceil(Math.random() * 6), isHeld: true

    }))
    }
   
   function rollDice(){
    setDice(generateAllNewDice)
   }

   function hold(id: any){
    console.log()
   }

 const diceElements = dice.map( dieObj => 
 <Die 
    value={dieObj.value}
    isHeld={dieObj.isHeld}
    hold ={() =>hold (dieObj) }  
  
  />) 

    return (
        <main>
            <div className="die-container">
             {diceElements}
            </div>

            <button className="roll-btn" onClick={rollDice}> Roll </button>
        </main>
    );
}