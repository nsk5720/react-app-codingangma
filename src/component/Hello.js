import World from './World'
import styles from "./Hello.module.css"
import { useState } from 'react';
import UserName from './UserName'

export default function Hello({age}) {
    // let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인입니다." : "미성년자입니다."
    function changeName() {
        //const newName = name === "Mike" ? "jane" : "Mike"
        console.log(name)
        setName(name === "Mike" ? "jane" : "Mike")
        // document.getElementById("name").innerText = name;
    }

    return (
        <div>
            <h2 id="name">{name}({age}) {msg}</h2>
            <UserName name={name}/>
            <button onClick={changeName} >change</button>
        </div>
    );
}