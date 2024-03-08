import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../slices/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch on action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 gap-2 border-b-2 text-left flex items-center justify-between"
        >
          <div className="py-2 w-10/12">
            <span className="font-semibold">{item.card.info.name}</span> -
            <span>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 text-right py-1">
            <div className="absolute">
              <button
                className="bg-green-600 text-green-50 p-0.5 font-normal"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
