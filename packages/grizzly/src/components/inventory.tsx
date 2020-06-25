import React, {useEffect, useState} from 'react';

function Inventory() {
    const [liste, fillList] = useState([]);
    useEffect(() =>{
        fetch("/api/list")
            .then(response => response.json())
            .then(data =>{
                fillList(data);
            })
        console.log("Hei fra log")
    }, [])
    return (
        <div>{liste}</div>
    );
}

export default Inventory;
