import {useState, useEffect} from "react";

export default function useFetcher(url) {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    },[url])
    
    return data
}