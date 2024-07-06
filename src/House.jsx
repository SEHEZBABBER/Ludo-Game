import React from 'react';
import './styles/House.css';
export default function House({col})
{
    console.log(col);
    let hstyle = {
        backgroundColor : col
    };
    return (
        <div className="house">
            <div id="one" style = {hstyle}></div>
            <div id="two" style = {hstyle}></div>
            <div id="three" style = {hstyle}></div>
            <div id="four" style = {hstyle}></div>
        </div>
    );
}