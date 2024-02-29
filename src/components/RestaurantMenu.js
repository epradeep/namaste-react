import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
     }
     console.log(resInfo);
    if(resInfo.length === 0) return <Shimmer />;

    const {id, name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    const recommendedMenu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;
    console.log(recommendedMenu);
    return <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    recommendedMenu?.map(recMenu => {
                        console.log(recMenu.card.info.name);
                        return (
                            <li key={recMenu?.card?.info?.id}> 
                                {recMenu?.card?.info?.name} - {"Rs."} {recMenu?.card?.info?.price/100}
                            </li>
                        )
                    })  
                }
            </ul>
    </div>
}

export default RestaurantMenu;