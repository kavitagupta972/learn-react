import React, {useEffect,useState} from 'react';
import { Link} from 'react-router-dom';

function Items(){
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetchItems();
    }, []);

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const result = await data.json();
        console.log('print result', result.data);
        setItems(result.data);
    }
    return (
        <div className = "items-container">
            {items && items.map(item => (
                <h1 key = {item.itemId}>
                    <Link to={`/items/${item.itemId}`}> {item.item.name}</Link></h1>
            ))}

        </div>
    );
}

export default Items;