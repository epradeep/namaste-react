import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo.length === 0) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  // const recommendedMenu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center mb-10">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold text-sm">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          category={category?.card?.card}
          // showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
