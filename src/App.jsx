import { useState, useEffect } from "react"
import Die from "./Die"
import "./styles/App.css"
import "./styles/Die.css"
import "./styles/General.css"

export default function App() {
  


  return (
    <main className="tenzies-app">
      <h1 className="game-title">Tenzies</h1>
      <h3 className="game-explaination">
        Roll until all dice are the same. Click each die to freeze it
        at its current value between rolls.
      </h3>
      <div className="dice-grid">
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={3}/>
      </div>
    </main>
  )
}
