import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const hadleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-xl font-semibold">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="p-1 m-1 border bg-black rounded-md text-white"
            onClick={hadleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h2>Your cart is emty, Add items to the cart!</h2>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
