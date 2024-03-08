import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { RES_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local state varible 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [serchText, setSerchText] = useState("");
  const [searchList, setSearchList] = useState("");
  // console.log("Body Rendered", listOfRestaurants);

  const RestaurantCardPromoted =  withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
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

  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName}= useContext(UserContext);

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>;

    return listOfRestaurants.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black p-1" value={serchText} onChange={(e) => setSerchText(e.target.value)} />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-1 bg-gray-100 rounded-lg" 
                onClick={()=>{
                  let filteredList= listOfRestaurants.filter(res=>res.info.avgRating>4.4);
                  setListOfRestaurants(filteredList);
                }}>Top Rated Filter</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                  <label>UserName: </label>
                  <input type="text" className="border border-solid border-black p-1" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap">
              {
                searchList?.map((restaurant) => (
               <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
                  {
                     restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant}/>
                  }
                </Link> 
                ))
              }
                
            </div>
        </div>
    )
}

export default Body;