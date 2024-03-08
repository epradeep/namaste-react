import { useEffect, useState } from "react";
import { RES_LIST_API } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchList, setSearchList] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(RES_LIST_API);
        const json = await data.json();

        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    }

    return listOfRestaurants, searchList;
}

export default useRestaurantList;