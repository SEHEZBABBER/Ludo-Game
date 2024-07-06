import './styles/RollDice.css'
import { useState } from 'react';
export default function RollDice({col})
{
    console.log("rerenderd");
    let[numinwords,setnuminwords] = useState('six');
    function handle_click()
    {
        let num = Math.floor(Math.random() * 6) + 1;
        if(num == 1)numinwords = 'one';
        if(num == 2)numinwords = 'two';
        if(num == 3)numinwords = 'three';
        if(num == 4)numinwords = 'four';
        if(num == 5)numinwords = 'five';
        if(num == 6)numinwords = 'six';
        setnuminwords(numinwords);
    }
    let bstyle = {
        borderColor : col
    };
    let hstyle = {
        Color : col
    };
    return(
        <div id="dice" style = {bstyle} onClick={handle_click}>
            <h2 style = {hstyle}>Roll Dice</h2>
            <p><i className={`fa-solid fa-dice-${numinwords} fa-3x`} id="dic"></i></p>
        </div>
    );
}