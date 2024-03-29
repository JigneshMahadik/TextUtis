import { useState } from 'react'
import './style.css'

export function Navbar(){

    const [darkMode, setDarkMode] = useState(true);

    function toggleModes(){
        let modes = document.getElementById("nav-main-cont");
        let menus = document.getElementById("left-cont");
        if(darkMode){
            modes.style.backgroundColor = "rgb(33,37,41,1)";
            menus.style.color = "white";
            setDarkMode(!darkMode);
        }
        else{
            setDarkMode(!darkMode);
            modes.style.backgroundColor = "rgb(134, 158, 158)";
            menus.style.color = "black";
        }
    }

    return(
        <div id="nav-main-cont">
            <div id="left-cont">
                <h3>Logo</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact US</p>
            </div>
            <div id="right-cont">
                <button onClick={toggleModes}>
                {
                    darkMode ? 'Dark Mode' : 'Light Mode'
                }
                </button>
            </div>
        </div>
    )
}