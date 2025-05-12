import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  return cartItems && cartItems.length ? (
    <div className="px-44">
      <div className="font-bold text-xl text-center border-b-2 pb-8">
        My Cart
      </div>
      {cartItems?.map((item, index) => (
        <ItemsList
          key={Math.random()}
          item={item}
          isExpanded={true}
          isCart="true"
        ></ItemsList>
      ))}
      <div className="mt-8 text-right font-bold text-xl">
        Total : Rs. {totalAmount / 100}
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <FaCartArrowDown className="w-24 h-24 mx-auto mb-6"/>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven’t added anything yet.</p>
        <Link to="/">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
          Browse Menu
        </button>
        </Link>

      </div>
    </div>
  );
};

export default Cart;

