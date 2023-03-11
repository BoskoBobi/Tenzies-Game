import { useState, useEffect } from "react"
import Die from "./Die"
import "./styles/App.css"
import "./styles/Die.css"
import "./styles/General.css"

export default function App() {

  const[dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++){
      let value = Math.floor(Math.random() * 6) + 1
      newDice.push(value)
    }
     console.log(newDice) 
  }

  allNewDice()

  const dieElements = dice.map(die => (
    <Die 
    value = {die.value}
    />
  ))

  return (
    <main className="tenzies-app">
      <h1 className="game-title">Tenzies</h1>
      <h3 className="game-explaination">
        Roll until all dice are the same. Click each die to freeze it
        at its current value between rolls.
      </h3>
      <div className="dice-grid">
        {dieElements}
      </div>
    </main>
  )
}
