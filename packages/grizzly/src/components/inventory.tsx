import React, {useEffect, useState} from 'react';

type Item = {
    name: string;
    quantity: number
}

function Inventory() {
    const [liste, fillList] = useState<Item[] | undefined>(undefined);

    useEffect(() => {
        fetch("/api/list")
            .then(response => response.json())
            .then(data =>{
                fillList(data.data.slice(0,2));
                console.log(data.data);
            })
            .catch(error =>{
                console.log("Noe gikk galt", error)
            })
        console.log("Hei fra log")
    }, [])

    if (liste && liste.length > 0) {
        console.log(liste[0]);
        // @ts-ignore
        return <ul>{liste.map(item => <li key={item.name}>{item.name}: {item.quantity}</li>)}</ul>
    }
    return <div>tom liste</   div>
};

export default Inventory;
