import React, { useEffect, useState } from 'react'
import axios from 'axios'



const ItemListContainer = ({greeting, fontSize}) => {
    const [chars, setChars] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>console.log(json))        
    }, []);


  return (
    <div className='row my-3'>
        <p className={fontSize}>
            {greeting}
        </p>
    </div>
  )
}

export default ItemListContainer