import { useEffect, useState } from "react";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listofRestraunts, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.844434699763742&lng=80.21573404499526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return  listofRestraunts.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" placeholder="search" value={searchText} onChange={(e)=> {setSearchText(e.target.value)} }/>
            <button onClick={()=> {
                //Filter restraunt
                console.log(searchText)

                const filterdRestruant = listofRestraunts.filter((res) => res.name === searchText)

                setListOfRestraunt(filterdRestruant);


            }}>Search</button>
        </div>
     
     <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated restraunts
        </button>
      </div>
      <div className="restraunt-container">
        {listofRestraunts?.map((res) => (
          <RestrauntCard res={res} />
        ))}
        {/* <RestrauntCard resname="KFC" cusine="Burger, Chicken" rating="4.3" /> */}
      </div>
    </div>
  );
};
