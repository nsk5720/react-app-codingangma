import React, { useState } from 'react';


export default  function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone)
    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone(){
        setIsDone(!isDone);
    }
    return(
        <tr className={isDone ? 'off' : ""}>
            <td>
                <input type ="checkbox" checked={isDone}onClick={toggleDone}></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>{ isShow ?"숨기기" : "뜻보기"}</button>
                <button class="btn_del">삭제</button>
            </td>
        </tr>
    )
}