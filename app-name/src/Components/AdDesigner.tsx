import React, { useState } from 'react';
import logo from './logo.svg';
import './AdDesigner.css';

function AdDesinger () {

 const [flavor, setFlavor] =useState ("pick a flavor")
 const [darkTheme, setDarkTheme] =useState(false)
 let darkThemeColor = " ";
 if (darkTheme ===  true){
     darkThemeColor = 'darkTheme';
 }
 const [fontSize, setFontSize] =useState(30)

 


    
    
    

    
    
    


    return (
        <div className={'AdDesigner' + darkThemeColor}>
            <section>
                <h2>Ad Designer</h2>

                <div className='Container1'>
                    <h4>Vote For</h4>
                    <p>{flavor} </p>
                    <p>{darkTheme}</p>
                </div>
            </section>

            <section>
                <h3>What to Support</h3>
                <button onClick = {()=> setFlavor("chocolate")} disabled = {flavor === 'chocolate'}>Chocolate</button> 
                <button onClick = {()=> setFlavor("vanilla")} disabled = {flavor === 'vanilla'}>Vanilla</button>
                <button onClick = {()=> setFlavor("strawberry")}disabled = {flavor === 'strawberry'}>Strawberry</button>

            </section>

            <div className={'Container3' + darkThemeColor}>
                <h3>Color Theme</h3>
                <p> {darkTheme}</p>
                <button onClick = {()=> setDarkTheme(false)} disabled = {darkTheme === false}>Light</button>
                <button onClick = {()=> setDarkTheme(true)}disabled = {darkTheme === true}>Dark</button> 
            </div>

            <div className='Container4'>
                <h3>Font Size</h3>
                <button onClick = {()=> setFontSize( prev => prev - 1)}>Down</button>
                <button onClick = {()=> setFontSize(prev => prev + 1)}>Up</button>
            </div>

            
            

            
        </div>

        







    )

}

export default AdDesinger;