import { hover } from "@testing-library/user-event/dist/hover"
import useFetch from './../hooks/useFetch'
import {useNavigate} from "react-router-dom"
export default function CreateDay(){

    const days = useFetch("http://localhost:3001/days")
    const history = useNavigate()
    function addDay(e){
        e.preventDefault();

        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day : days.length+1,
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료 되었습니다.")
                history(`/day/${days.length+1}`)
            }
        })
    }
    return(
    <div>
        <h3>현재 일수 : 10일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
    )
}