import React, { useEffect,useState } from 'react';

const ItemDetail = (props)=>{
    const [itemDetail, setItemDetail] = useState({});
    useEffect(()=>{
        fetchItemDetail();
        console.log('props',props.match.params.id);
    }, []);
    const fetchItemDetail = async ()=>{
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`);
        const result =  await data.json();
        console.log(result.data.item);
        setItemDetail(result.data.item);
    }
    return <h1>Item : {itemDetail && itemDetail.name}</h1>
}
export default ItemDetail;