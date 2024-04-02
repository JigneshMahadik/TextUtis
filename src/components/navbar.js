import { Children, createContext, useContext, useState } from 'react'
import './style.css'
import { Home } from './home';
import { NavLink } from "react-router-dom";
import {ThemeContext} from '../context/ThemeContext';

export const darkModeContext = createContext();

export function Navbar(){

    // const [darkMode, setDarkMode] = useState(true);
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    function toggleModes(){
        let modes = document.getElementById("nav-main-cont");
        let menus = document.getElementById("left-cont");
        if(darkMode){
            modes.style.backgroundColor = "black";
            menus.style.color = "white";
            document.getElementById("home").style.color = "white";
            document.getElementById("about").style.color = "white";
            document.getElementById("contact").style.color = "white";
            setDarkMode(!darkMode);
        }
        else{
            setDarkMode(!darkMode);
            document.getElementById("home").style.color = "black";
            document.getElementById("about").style.color = "black";
            document.getElementById("contact").style.color = "black";
            modes.style.backgroundColor = "rgb(134, 158, 158)";
            menus.style.color = "black";
        }
    }

    return(
        <div id="nav-main-cont">
            {/* <darkModeContext.Provider value={darkMode}>
                <Home/>
            </darkModeContext.Provider> */}
            <div id="left-cont">
                <h3>Logo</h3>
                <NavLink to="/Home" id='home'><p>Home</p></NavLink>
                <NavLink to="/About" id='about'><p>About Us</p></NavLink>
                <NavLink id='contact'><p>Contact US</p></NavLink>
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
