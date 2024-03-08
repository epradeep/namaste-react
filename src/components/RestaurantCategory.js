import { useState } from "react";
import ItemList from "./ItemList";
import { SlArrowDown } from "react-icons/sl";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
    
  const [isActive, setISActive] = useState(false);

  const handleAccordian = () => {
    // setShowItems(!showItems);
    setISActive(!isActive)
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleAccordian}
        >
          <span className="font-bold text-md">
            {category.title} ({category.itemCards.length})
          </span>
          <span>
            <SlArrowDown className="text-sm" />
          </span>
        </div>
        {isActive && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
