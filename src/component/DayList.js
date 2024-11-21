import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { useParams} from 'react-router-dom';

export default function DayList(){
    const [days, setDays] = useState([]);
    // useState처럼 계속 호출됨 그런데 2번째 인자로 배열 안에 변수명을 주면
    // 해당 변수가 수정될 때만 호출할 수 있게됨 
    // onClick에만 호출O // onClick2에는 호출X
    useEffect(() =>{
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        });
    },[])

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`} >Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}

