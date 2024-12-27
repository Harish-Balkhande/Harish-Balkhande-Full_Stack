import React, { useState } from 'react'
import CurrentOverStatus from '../sections/CurrentOverSatus';
import ScoreBoard from '../sections/ScoreBoard';

export default function Home() {
  const [score, setScore] = useState([1, 3, 4, 2, 6, 'out']);

  return (
    <div>
      <ScoreBoard />
      <div style={{width:'50%', margin:"20px auto",textAlign:"center", border:"2px solid yellow",padding:"15px", boxShadow: "0 0 15px rgba(219, 205, 52, 0.66)" }}>
        Animation Of Current Ball
      </div>
      <CurrentOverStatus ballScores={score} currentBallIndex="none" />
    </div>
  )
}
