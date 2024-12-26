import React, { useState } from 'react'
import "./scoreBoard.css";

export default function ScoreBoard() {
    const [headerData, setHeaderData] = useState({
        score: 0,
        wicket: 0,
        over: 0,
        balls: 0
    })

  return (    
    <div id='headSection'>
        <p id='score'>{headerData.score}/{headerData.wicket}</p>
        <p id='wicket'>Over ({headerData.over}.{headerData.balls})</p>
    </div>

  )
}
