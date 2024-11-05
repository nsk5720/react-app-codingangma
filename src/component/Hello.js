import World from './World'
import styles from "./Hello.module.css"
import { useState } from 'react';

export default function Hello() {
    // let name = "Mike";
    const [name, setName] = useState('Mike');
    function changeName() {

        //const newName = name === "Mike" ? "jane" : "Mike"
        console.log(name)
        setName(name === "Mike" ? "jane" : "Mike")
        // document.getElementById("name").innerText = name;
    }
    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={changeName} >change</button>
        </div>
    );
}