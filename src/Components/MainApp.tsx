import { useState } from "react";
import { Die } from "./Die";

export function MainApp() {
    
   
    const [dice, setDice] = useState(generateAllNewDice)

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false, 
            id: crypto.randomUUID() 
        }))
    }
    
function rollDice() {
        setDice(oldDice => oldDice.map(die => {
           
            return die.isHeld ? 
                die : 

                {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: crypto.randomUUID()
                }
        })) 
    }

    function hold(id: string) { 
        setDice(oldDice =>  oldDice.map(die => 
        (
                die.id === id ?
                    { ...die, isHeld: !die.isHeld } : die
        ))
        )
    }

    const diceElements = dice.map(dieObj =>
        <Die
            key={dieObj.id} 
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}  
        />
    )

    return (
        <main>

          <h1 className="title">Tenzies</h1>
          <p>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className="die-container">
                {diceElements}
            </div>

            <button className="roll-btn" onClick={rollDice}> Roll </button>
        </main>
    );
}