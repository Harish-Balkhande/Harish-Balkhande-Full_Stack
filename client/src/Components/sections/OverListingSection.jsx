import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentOverStatus from './CurrentOverSatus';

export default function OverListingSection() {

  const [scoreInEachOver, setScoreInEachOver] = useState([
    [1, 3, 4, 2, 6, 'out'],
    [2, 2, 6, 3, 1, 'out'],
    [4, 6, 3, 1, 2, 'out'],
    ['out', 1, 4, 6, 3, 2],
    [3, 6, 1, 4, 2, 'out'],
    [2, 1, 'out', 3, 6, 4],
  ]);

  useEffect(() => {
    // fetch();
  }, []);

  const fetch = async () => {
    const response = await axios.get("url");
    if (response.data) {
      setScoreInEachOver(response.data);
    }
  };

  return (
    <div>
      {scoreInEachOver.map((item, index) => (
        <div key={index}>
          <p style={{paddingLeft:"50px",margin:"0px",color:"aliceblue"}}>Over {index + 1}</p> 
          <CurrentOverStatus ballScores={item} currentBallIndex="none" />
        </div>
      ))}
    </div>
  );
}
