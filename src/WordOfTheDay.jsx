import React, {useState} from 'react'
import bckdrp from "./backdrop.webp"
import "./WordOfTheDay.css"

const WordOfTheDay = () => {
 
  return (
    <div className='wrdofdday'>
        <img src={bckdrp} alt="backdrop" className='bckdrp'/> 
        <div className='word'>
            <div className='title'>Word Of The Day:<span className='clndr'> March 24, 2023 </span></div>
            <div className='dvd'><hr></hr></div>
            <div className='wrdnm'>
                <div className='nm'> zany. </div>
                <div className='dets'><span className='prtofspch'>noun</span> | <span className='prnc'>ZAY-nee</span></div>
            </div>
            <hr></hr>
            <div className='wrddf'>
                <div className='wrddfhd'>What it means</div>
                <div className='ddef'>
                    A zany is a person who acts like a buffoon to amuse others, or one who is generally foolish or eccentric. Zany also has a more specific sense that refers to a type of clown or acrobat in old comedies.
                </div>
            </div>
            <div className='exmpl'>
                //   My brother's friends are an unpredictable bunch of zanies
            </div>
            <div className='origin'>
                <div className='wrdohd'>Origin</div>
                <div className='odef'>
                    Did you know the word originated as a noun—one that has withstood the test of time? Zanies have been theatrical buffoons since the heyday of the Italian commedia dell’arte, in which a "zanni" was a stock servant character, often an intelligent and proud valet with abundant common sense and a love of practical jokes.
                </div>
            </div>
        </div>
    </div>
  )
}

export default WordOfTheDay