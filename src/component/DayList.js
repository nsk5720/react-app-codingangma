import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";

export default function DayList(){
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);
    function onClick(){
        setCount (count+1)
    }
    function onClick2(){
        setDays([
            ...days,
            {
                id:Math.random(),
                day: 1,
            },
        ])
    }

    // useState처럼 계속 호출됨 그런데 2번째 인자로 배열 안에 변수명을 주면
    // 해당 변수가 수정될 때만 호출할 수 있게됨 
    // onClick에만 호출O // onClick2에는 호출X
    useEffect(() =>{
        console.log("change");
    },[count])

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}><Link to={`/day/${day.day}`} >Day {day.day}</Link> </li>
            ))}
            <li></li>
            <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>day Change</button>
        </ul>
    )
}

