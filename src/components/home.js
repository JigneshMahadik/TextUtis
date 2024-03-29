import { Navbar } from "./navbar";
import "./style.css"
import { useState } from "react"

export function Home(){

    const [text, setText] = useState("");
    const [chars, setChars] = useState(0);
    const [words, setWords] = useState(0);
    const [preview, setPreview] = useState([]);

    function handleUpperCase(){
        let input = document.getElementById("textarea-input").value;
        // console.log(input.toUpperCase());
        setText(input.toUpperCase());
    }
    function handleLowerCase(){
        let input = document.getElementById("textarea-input").value;
        setText(input.toLowerCase());
    }
    function copy(){
        let input = document.getElementById("textarea-input");
        navigator.clipboard.writeText(input.value);
        // input.focus();
        input.select();
    }
    function handleStates(e){
        // To Display this text in input box
        let val = e.target.value;
        setText(val);

        // To count number of characters entered in input box
        setChars(val.length);

        // To count number of words entered in input box
        let wrds = document.getElementById("textarea-input").value;
        let wordsVal = wrds.trim() !== "" ? wrds.trim().split(" ") : [];
        setWords(wordsVal.length);

        // To show preview of document
        setPreview(wordsVal);
    }
    function removeSpaces(){
        let txt = document.getElementById("textarea-input").value;
        setText(txt.trim());
    }
    function clearText(){
        let txt = document.getElementById("textarea-input").value;
        setText("");
        setChars(0);
    }

    return(
        <div>
            <Navbar/>
            <h1 id="title">TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            <div id="text-area">
                <div id="input-title">
                    <h2>Enter Your Text Here:</h2>
                </div>
                {/* <input type="textarea" id="textarea-input" value={text}/> */}
                <textarea id="textarea-input" value={text} onChange={handleStates}/>
                <div id="buttons">
                    <button id="btn" onClick={handleUpperCase}>Convert UpperCase</button>
                    <button id="btn" onClick={handleLowerCase}>Convert LowerCase</button>
                    <button id="btn3" onClick={clearText}>Clear Text</button>
                    <button id="btn4" onClick={copy}>Copy To Clipboard</button>
                    <button id="btn" onClick={removeSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div id="summary-title">
                <h1>Summery Of Your Text</h1>
                <p>Number of Words : {words}</p>
                <p>Number of Characters : {chars}</p>
                <p>Reading Time : 0</p>
            </div>
            <div id="text-preview">
                Copyright@2024 | All Rights Reserved | by Jignesh Mahadik
            </div>
        </div>
    )
}