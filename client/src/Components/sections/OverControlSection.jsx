import React from 'react'
import CurrentOverSatus from './CurrentOverSatus'
import "./overControlSection.css";

export default function OverControlSection() {
    const [ballScores, setBallScores] = useState([0, 0, 0, 0, 0, 0]);
    return (
        <>
            <CurrentOverSatus />

            {/* control panel for updating over on each ball */}
            <div id='controlPanelDiv'>
                <p>Over Control Panel</p>
                <div class="controlPanel">
                    <button class="row1">0</button>
                    <button class="row1">1</button>
                    <button class="row1">2</button>
                    <button class="row1">3</button>
                </div>

                <div class="controlPanel">
                    <button class="row2">4</button>
                    <button class="row2">6</button>
                    <button class="row2">out</button>
                    <button class="row2" >Next</button>  
                </div>
            </div>

        </>

    )
}
