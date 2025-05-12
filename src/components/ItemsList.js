import { useDispatch } from "react-redux";
import { CATEGORY_IMAGE_URL } from "../utils/constants";
import {
  addItems,
  updateTotalAmount,
  removeFromCart,
} from "../store/cartSlice";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const ItemsList = ({ item, isExpanded, isCart = false }) => {
  const { id, name, price, imageId, description, defaultPrice } =
    item.card.info;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItems(item));
  };

  const handledRemoveItem = () => {
    dispatch(removeFromCart(item.card.info.id));
  }

  const handledAddItem = () => {
    dispatch(addItems(item));
  }

  return isExpanded ? (
    <div className="border-b border-b-gray-300 border-spacing-1 flex justify-between py-4 pb-8">
      <div className="w-9/12 pl-4 flex justify-between flex-col">
        <div>
          <div className="font-bold">{name}</div>
          <div className="font-bold">
            Rs. {price ? price / 100 : defaultPrice / 100}
          </div>
          <p className="text-gray-500">{description}</p>
        </div>
        {isCart ? (
          <div>
            <div className="flex text-center my-auto">
              <FaMinusCircle className="text-orange-500 h-5 w-5 mr-1 cursor-pointer hover:text-orange-600" onClick={handledRemoveItem}/>{" "}
              <span className="font-bold">{item.quantity} </span>{" "}
              <FaPlusCircle className="text-orange-500 hover:text-orange-600 h-5 w-5 ml-1 cursor-pointer" onClick={handledAddItem}/>{" "}
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-2/12 relative">
        <img
          alt="resto-logo"
          className="rounded-lg h-40 b-4 m-auto"
          src={CATEGORY_IMAGE_URL + imageId}
        ></img>
        {!isCart ? (
          <button
            className="absolute  text-white p-2 bg-orange-500 hover:bg-orange-600 shadow-lg mx-auto rounded-lg w-24 left-12 bottom-[-18px]"
            onClick={handleAddToCart}
          >
            Add +
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default ItemsList;
