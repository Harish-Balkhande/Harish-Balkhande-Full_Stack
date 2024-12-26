// import React from 'react';
// import "./currentOverStatus.css";

// export default function CurrentOverStatus({ ballScores }) {
//     return (
//         <div style={{ padding: "8px", color: "black", fontWeight: "500" }}>
//             <p style={{ paddingLeft: "30px", color: "white", letterSpacing: "3px" }}>This Over</p>
//             <div id='currentOver'>
//                 {ballScores.map((score, index) => (
//                     <div style={{ textAlign: "center", color: "red" }} key={index}>
//                         <div className='currentBall' style={{ backgroundColor: getBallColor(index) }}>
//                             {score}
//                         </div>
//                         {`${index + 1}${getBallSuffix(index)}`}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // Helper function to get ball suffix (e.g., 1st, 2nd, 3rd, etc.)
// const getBallSuffix = (index) => {
//     if (index === 0) return "st ball";
//     if (index === 1) return "nd ball";
//     if (index === 2) return "rd ball";
//     return "th ball";
// }

// // Helper function to get ball color based on index
// const getBallColor = (index) => {
//     const colors = ["#bab4b4", "skyblue", "#5dcf5d", "orange", "yellow", "#f1c40f"];
//     return colors[index] || "gray"; // Default color if something goes wrong
// }




import React from 'react'
import "./currentOverStatus.css";

export default function CurrentOverSatus() {
    return (
        <div style={{ padding: "8px", color: "black", fontWeight:"500" }} >
            <p style={{paddingLeft:"30px", color:"white",letterSpacing:"3px"}}>This Over</p>
            <div id='currentOver'>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall'>0</div>
                    1st ball
                </div>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall' style={{ backgroundColor: "#bab4b4" }}>0</div>
                    2nd ball
                </div>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall' style={{ backgroundColor: "skyblue" }}>0</div>
                    3rd ball
                </div>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall' style={{ backgroundColor: "#5dcf5d" }}>0</div>
                    4th ball
                </div>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall' style={{ backgroundColor: "orange" }}>0</div>
                    5th ball
                </div>
                <div style={{ textAlign: "center", color: "red" }}>
                    <div className='currentBall' style={{ backgroundColor: "yellow" }}>0</div>
                    6th ball
                </div>

            </div>
        </div>

    )
}
