import React, { useState } from 'react';
import logo from './logo.svg';
import './Votes.css';

function Votes () {
    const [chocolateVote, setChocolateVote] =useState("chocolate")
    const [vanillaVote, setVanillaVote] =useState("vanilla")
    const [strawberryVote, setStrawberryVote] =useState("strawberry")


    return (
        <div className='Votes'>
             <h3>Vote Here</h3>
                <button onClick = {()=> setChocolateVote("chocolate")}>Chocolate</button>
                <button onClick = {()=> setVanillaVote("vanilla")}>Vanilla</button>
                <button onClick = {()=> setStrawberryVote("strawberry")}>Strawberry</button>

        </div>
    )
}   

export default Votes;


    