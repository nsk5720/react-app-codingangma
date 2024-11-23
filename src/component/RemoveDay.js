import useFetch from './../hooks/useFetch';
import { useState } from 'react';

export default function RemoveDay() {
    const removeDay = useFetch('http://localhost:3001/days');
    const [selectedDay, setSelectedDay] = useState(0); // 선택된 값을 상태로 관리
    
    
    const removeDayJijung = useFetch(`http://localhost:3001/days?day=${selectedDay}`);
    const [AAA, setAAA] = useState(removeDayJijung);

    function remove() {
        if (window.confirm('삭제 하시겠습니까?')) {
            // 선택된 day에 해당하는 id를 찾기
            const dayToDelete = removeDay.find(day => day.day === selectedDay);
            if (dayToDelete) {
                fetch(`http://localhost:3001/days/${dayToDelete.id}`, { // id를 사용하여 삭제
                    method: 'DELETE',
                }).then(res => {
                    if (res.ok) {
                        setAAA({ id: 0 }); // 상태 업데이트
                    } else {
                        alert('삭제 실패');
                    }
                })
            }
        }
    }

    return (
        <>
            <p>
                <select value={selectedDay} onChange={(e) => setSelectedDay(Number(e.target.value))}>
                    <option value={0}>선택하세요</option>
                    {removeDay.map(day => (
                        <option key={day.id} value={day.day}>{day.day}일</option>
                    ))}
                </select>
            </p>
            <p>
                <button onClick={remove}>삭제하기</button>
            </p>
        </>
    );
}



