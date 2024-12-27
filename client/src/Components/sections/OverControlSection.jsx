// // import React from 'react'
// // import CurrentOverSatus from './CurrentOverSatus'
// // import "./overControlSection.css";

// // export default function OverControlSection() {
// //     const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]);
// //     return (
// //         <>
// //             <CurrentOverSatus />

// //             {/* control panel for updating over on each ball */}
// //             <div id='controlPanelDiv'>
// //                 <p>Over Control Panel</p>
// //                 <div class="controlPanel">
// //                     <button class="row1">0</button>
// //                     <button class="row1">1</button>
// //                     <button class="row1">2</button>
// //                     <button class="row1">3</button>
// //                 </div>

// //                 <div class="controlPanel">
// //                     <button class="row2">4</button>
// //                     <button class="row2">6</button>
// //                     <button class="row2">out</button>
// //                     <button class="row2" >Next</button>  
// //                 </div>
// //             </div>

// //         </>

// //     )
// // }


// import React, { useState } from 'react';
// import CurrentOverStatus from "./CurrentOverSatus"
// import "./overControlSection.css";

// export default function OverControlSection() {
//     const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]); // Initial scores for each ball
//     const [currentBallIndex, setCurrentBallIndex] = useState(0); // Index of the current ball in the over

//     // Function to update the score of the current ball
//     const updateBallScore = (score) => {
//         const updatedScores = [...ballScores];
//         updatedScores[currentBallIndex] = score;
//         setBallScores(updatedScores);
//     };

//     // Function to go to the next ball
//     const nextBall = () => {
//         if (currentBallIndex < 5) {
//             setCurrentBallIndex(currentBallIndex + 1);
//         } else {
//             alert("Over completed!");
//         }
//     };

//     return (
//         <>
//             <CurrentOverStatus ballScores={ballScores} />

//             {/* Control panel for updating over on each ball */}
//             <div id='controlPanelDiv'>
//                 <p>Over Control Panel</p>
//                 <div className="controlPanel">
//                     <button className="row1" onClick={() => updateBallScore(0)}>0</button>
//                     <button className="row1" onClick={() => updateBallScore(1)}>1</button>
//                     <button className="row1" onClick={() => updateBallScore(2)}>2</button>
//                     <button className="row1" onClick={() => updateBallScore(3)}>3</button>
//                 </div>

//                 <div className="controlPanel">
//                     <button className="row2" onClick={() => updateBallScore(4)}>4</button>
//                     <button className="row2" onClick={() => updateBallScore(6)}>6</button>
//                     <button className="row2" onClick={() => updateBallScore("out")}>Out</button>
//                     <button className="row2" onClick={nextBall}>Next</button>
//                 </div>
//             </div>
//         </>
//     );
// };


// import React, { useState } from 'react';
// import CurrentOverStatus from './CurrentOverSatus';
// import "./overControlSection.css";

// export default function OverControlSection() {
//     const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]); // Initial scores for each ball
//     const [currentBallIndex, setCurrentBallIndex] = useState(0); // Index of the current ball in the over
//     const [runs, setRuns] = useState(0); // Total runs scored in the current over
//     const [wickets, setWickets] = useState(0); // Total wickets taken in the current over
//     const [over, setOver] = useState(1); // Current over number

//     // Function to update the score of the current ball
//     const updateBallScore = (score) => {
//         const updatedScores = [...ballScores];
//         // If the score is "out", increase the wicket count
//         if (score === "out") {
//             if (updatedScores[currentBallIndex] !== "out") {
//                 setWickets(wickets + 1);
//                 updatedScores[currentBallIndex] = "out";
//             }
//         } else {
//             updatedScores[currentBallIndex] = score;
//         }
//         setBallScores(updatedScores);
//         calculateRuns(updatedScores);
//     };

//     // Function to calculate the total runs
//     const calculateRuns = (updatedScores) => {
//         const totalRuns = updatedScores.reduce((sum, score) => {
//             return score === "out" ? sum : sum + score; // Skip "out" scores in the run calculation
//         }, 0);
//         setRuns(totalRuns);
//     };

//     // Function to go to the next ball
//     const nextBall = () => {
//         if (currentBallIndex < 5) {
//             setCurrentBallIndex(currentBallIndex + 1);
//         } else {
//             // After 6 balls, the over is complete
//             setOver(over + 1);
//             resetOver(); // Reset ball index and scores for a new over
//         }
//     };

//     // Function to reset the over (start a new over)
//     const resetOver = () => {
//         setBallScores([0, 0, 0, 0, 0, 0]);
//         setCurrentBallIndex(0);
//     };

//     return (
//         <>
//             <CurrentOverStatus ballScores={ballScores} />

//             {/* Control panel for updating over on each ball */}
//             <div id="controlPanelDiv">
//                 <p>Over Control Panel</p>
//                 <div className="controlPanel">
//                     <button className="row1" onClick={() => updateBallScore(0)}>0</button>
//                     <button className="row1" onClick={() => updateBallScore(1)}>1</button>
//                     <button className="row1" onClick={() => updateBallScore(2)}>2</button>
//                     <button className="row1" onClick={() => updateBallScore(3)}>3</button>
//                 </div>

//                 <div className="controlPanel">
//                     <button className="row2" onClick={() => updateBallScore(4)}>4</button>
//                     <button className="row2" onClick={() => updateBallScore(6)}>6</button>
//                     <button className="row2" onClick={() => updateBallScore("out")}>Out</button>
//                     <button className="row2" onClick={nextBall}>Next</button>
//                 </div>
//                 <input type='number' name='currentBallIndex'/>
//             </div>

//             {/* Display runs, wickets, and over */}
//             <div style={{ marginTop: "20px", fontSize: "16px", color: "white" }}>
//                 <p>Runs: {runs}</p>
//                 <p>Wickets: {wickets}</p>
//                 <p>Over: {over}</p>
//             </div>
//         </>
//     );
// };


// import React, { useState } from 'react';
// import CurrentOverStatus from './CurrentOverSatus';
// import "./overControlSection.css";

// export default function OverControlSection() {
//     const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]); // Initial scores for each ball
//     const [currentBallIndex, setCurrentBallIndex] = useState(0); // Index of the current ball in the over
//     const [runs, setRuns] = useState(0); // Total runs scored in the current over
//     const [wickets, setWickets] = useState(0); // Total wickets taken in the current over
//     const [over, setOver] = useState(1); // Current over number

//     // Function to update the score of the current ball
//     const updateBallScore = (score) => {
//         const updatedScores = [...ballScores];
//         // If the score is "out", increase the wicket count
//         if (score === "out") {
//             if (updatedScores[currentBallIndex] !== "out") {
//                 setWickets(wickets + 1);
//                 updatedScores[currentBallIndex] = "out";
//             }
//         } else {
//             updatedScores[currentBallIndex] = score;
//         }
//         setBallScores(updatedScores);
//         calculateRuns(updatedScores);
//     };

//     // Function to calculate the total runs
//     const calculateRuns = (updatedScores) => {
//         const totalRuns = updatedScores.reduce((sum, score) => {
//             return score === "out" ? sum : sum + score; // Skip "out" scores in the run calculation
//         }, 0);
//         setRuns(totalRuns);
//     };

//     // Function to go to the next ball
//     const nextBall = () => {
//         if (currentBallIndex < 5) {
//             setCurrentBallIndex(currentBallIndex + 1);
//         } else {
//             // After 6 balls, the over is complete
//             setOver(over + 1);
//             resetOver(); // Reset ball index and scores for a new over
//         }
//     };

//     // Function to reset the over (start a new over)
//     const resetOver = () => {
//         setBallScores([0, 0, 0, 0, 0, 0]);
//         setCurrentBallIndex(0);
//     };

//     // Handle the manual change of ball index
//     const handleBallIndexChange = (e) => {
//         const newIndex = Number(e.target.value);
//         if (newIndex >= 0 && newIndex <= 5) {
//             setCurrentBallIndex(newIndex);
//         } else {
//             alert("Please enter a valid ball index (0-5)");
//         }
//     };

//     return (
//         <>
//             <CurrentOverStatus ballScores={ballScores} />

//             {/* Control panel for updating over on each ball */}
//             <div id="controlPanelDiv">
//                 <p>Over Control Panel</p>
//                 <div className="controlPanel">
//                     <button className="row1" onClick={() => updateBallScore(0)}>0</button>
//                     <button className="row1" onClick={() => updateBallScore(1)}>1</button>
//                     <button className="row1" onClick={() => updateBallScore(2)}>2</button>
//                     <button className="row1" onClick={() => updateBallScore(3)}>3</button>
//                 </div>

//                 <div className="controlPanel">
//                     <button className="row2" onClick={() => updateBallScore(4)}>4</button>
//                     <button className="row2" onClick={() => updateBallScore(6)}>6</button>
//                     <button className="row2" onClick={() => updateBallScore("out")}>Out</button>
//                     <button className="row2" onClick={nextBall}>Next</button>
//                 </div>

//                 {/* Input to manually set the current ball index */}
//                 <div style={{ marginTop: "20px" }}>
//                     <label style={{ color: "white" }}>Set Ball Index (0-5):</label>
//                     <input
//                         type="number"
//                         name="currentBallIndex"
//                         value={currentBallIndex}
//                         onChange={handleBallIndexChange}
//                         min="0"
//                         max="5"
//                         style={{ marginLeft: "10px", padding: "5px", width: "60px" }}
//                     />
//                 </div>
//             </div>

//             {/* Display runs, wickets, and over */}
//             <div style={{ marginTop: "20px", fontSize: "16px", color: "white" }}>
//                 <p>Runs: {runs}</p>
//                 <p>Wickets: {wickets}</p>
//                 <p>Over: {over}</p>
//             </div>
//         </>
//     );
// };


import React, { useState } from 'react';
import CurrentOverStatus from './CurrentOverSatus';
import "./overControlSection.css";

export default function OverControlSection() {
    const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]); // Initial scores for each ball
    const [currentBallIndex, setCurrentBallIndex] = useState(0); // Index of the current ball in the over
    const [runs, setRuns] = useState(0); // Total runs scored in the current over
    const [wickets, setWickets] = useState(0); // Total wickets taken in the current over
    const [over, setOver] = useState(1); // Current over number

    // Function to update the score of the current ball
    const updateBallScore = (score) => {
        const updatedScores = [...ballScores];
        
        // Check if the current ball's score is being changed from "out" to a number or vice versa
        if (updatedScores[currentBallIndex] === "out" && score !== "out") {
            // "out" to a number (decrement the wicket count)
            setWickets(wickets - 1);
        } else if (updatedScores[currentBallIndex] !== "out" && score === "out") {
            // A number to "out" (increment the wicket count)
            setWickets(wickets + 1);
        }

        // Update the ball's score
        updatedScores[currentBallIndex] = score;

        // Update the ballScores state and recalculate the runs
        setBallScores(updatedScores);
        calculateRuns(updatedScores);
    };

    // Function to calculate the total runs
    const calculateRuns = (updatedScores) => {
        const totalRuns = updatedScores.reduce((sum, score) => {
            return score === "out" ? sum : sum + score; // Skip "out" scores in the run calculation
        }, 0);
        setRuns(totalRuns);
    };

    // Function to go to the next ball
    const nextBall = () => {
        if (currentBallIndex < 5) {
            setCurrentBallIndex(currentBallIndex + 1);
        } else {
            // After 6 balls, the over is complete
            setOver(over + 1);
            resetOver(); // Reset ball index and scores for a new over
        }
    };

    // Function to reset the over (start a new over)
    const resetOver = () => {
        setBallScores([0, 0, 0, 0, 0, 0]);
        setCurrentBallIndex(0);
    };

    // Handle the manual change of ball index
    const handleBallIndexChange = (e) => {
        const newIndex = Number(e.target.value);
        if (newIndex >= 0 && newIndex <= 5) {
            setCurrentBallIndex(newIndex);
        } else {
            alert("Please enter a valid ball index (0-5)");
        }
    };

    return (
        <>
            <CurrentOverStatus ballScores={ballScores} />

            {/* Control panel for updating over on each ball */}
            <div id="controlPanelDiv">
                <p>Over Control Panel</p>
                <div className="controlPanel">
                    <button className="row1" onClick={() => updateBallScore(0)}>0</button>
                    <button className="row1" onClick={() => updateBallScore(1)}>1</button>
                    <button className="row1" onClick={() => updateBallScore(2)}>2</button>
                    <button className="row1" onClick={() => updateBallScore(3)}>3</button>
                </div>

                <div className="controlPanel">
                    <button className="row2" onClick={() => updateBallScore(4)}>4</button>
                    <button className="row2" onClick={() => updateBallScore(6)}>6</button>
                    <button className="row2" onClick={() => updateBallScore("out")}>Out</button>
                    <button className="row2" onClick={nextBall}>Next</button>
                </div>

                {/* Input to manually set the current ball index */}
                <div style={{ margin: "8px auto" }}>
                    <label style={{ color: "black", textAlign:"left" }}>Enter Ball No. to edit (0-5) : </label>
                    <input
                        type="number"
                        name="currentBallIndex"
                        value={currentBallIndex}
                        onChange={handleBallIndexChange}
                        min="0"
                        max="5"
                        style={{ padding: "5px", width: "15%"}}
                    />
                </div>
            </div>

            {/* Display runs, wickets, and over */}
            <div style={{ marginTop: "20px", fontSize: "16px", color: "white" }}>
                <p>Runs: {runs}</p>
                <p>Wickets: {wickets}</p>
                <p>Over: {over}</p>
            </div>
        </>
    );
};

