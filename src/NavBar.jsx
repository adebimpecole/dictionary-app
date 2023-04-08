import React, {useState,} from 'react'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import "./NAvbar.css"
import Axios from "axios";

const NavBar = () => {

  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  // Function to fetch information on button
  // click, and set the data accordingly
  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
      setvalue(data)
    });
  }
 
  // Function to play and listen the
  // phonetics of the searched word
  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }
  return (
    <div className='navbar'>
        <span className='logo'>dictionary.</span>
        <span className='searchbox'>
            <input type="text" id="srch" name="srch" placeholder='Search Dictionary' 
            onChange={(e) => {
            setSearchWord(e.target.value);
          }}/>
            <GrFormClose className='close'/>
            <span className='srchbtn' 
            onClick={() => {
            getMeaning();
          }}><AiOutlineSearch/></span>
        </span>
    </div>
  )
}

export default NavBar