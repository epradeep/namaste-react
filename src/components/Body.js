import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local state varible 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [serchText, setSerchText] = useState("");
  const [searchList, setSearchList] = useState("");
  // console.log(searchList);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setSearchList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
  }

  useEffect(() => {
    fetchData();
  },[]);

  const handleSearch = () => {
    const serachFilteredList = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(serchText.toLowerCase()));
    setSearchList(serachFilteredList);
  }

    return listOfRestaurants.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={serchText} onChange={(e) => setSerchText(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
              </div>

              <button 
              className="filter-btn" 
              onClick={()=>{
                let filteredList= listOfRestaurants.filter(res=>res.info.avgRating>4.4);
                setListOfRestaurants(filteredList);
              }}>Top Rated Filter</button>
            </div>
            <div className="res-container">
              {
                searchList?.map((restaurant) => (
               <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
                  <RestaurantCard resData={restaurant}/> 
                </Link> 
                ))
              }
                
            </div>
        </div>
    )
}

export default Body;