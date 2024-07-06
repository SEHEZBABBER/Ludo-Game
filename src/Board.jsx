import React from 'react';
import House from './House.jsx' 
import './styles/Board.css';
import Section from './Section.jsx'
export default function Board()
{
    return (
        <div className='Board'>
            <House col = "red"/>
            <House col = "blue"/>
            <House col = "green"/>
            <House col = "yellow"/>
            <div id="flex2">
            <Section />
            <div id="lastbox"></div>
            <Section />
            </div>
        </div>
    );
}