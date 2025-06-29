import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestrauntMenu = () => {
 
    const { resId } = useParams()
    
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8549426&lng=80.20703280000001&restaurantId=${resId}`);
        const json = await data.json();
        console.log(json)
    }

  return (
    <div className='menu'>
        <h1>RestrauntMenu</h1>
        <h2>Menu</h2>
        <h2>List</h2> 
    </div>
  )
}

export default RestrauntMenu