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


// import React, { useState } from "react";

// export default function Cart() {
//   // Example cart state: toggle between empty array and items
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Margherita Pizza",
//       price: 10.99,
//       quantity: 2,
//       image: "https://source.unsplash.com/80x80/?pizza",
//     },
//     {
//       id: 2,
//       name: "Veg Burger",
//       price: 7.5,
//       quantity: 1,
//       image: "https://source.unsplash.com/80x80/?burger",
//     },
//   ]);

//   const getTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h2>

//         {cartItems.length === 0 ? (
//           <div className="text-center">
//             <img
//               src="https://www.svgrepo.com/show/530500/shopping-cart-cross.svg"
//               alt="Empty Cart"
//               className="w-24 h-24 mx-auto mb-6"
//             />
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h3>
//             <p className="text-gray-500 mb-6">Looks like you haven’t added anything yet.</p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
//               Browse Menu
//             </button>
//           </div>
//         ) : (
//           <>
//             <ul className="space-y-6">
//               {cartItems.map((item) => (
//                 <li key={item.id} className="flex items-center justify-between border-b pb-4">
//                   <div className="flex items-center space-x-4">
//                     <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
//                       <p className="text-gray-600">Qty: {item.quantity}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 flex justify-between items-center border-t pt-4">
//               <p className="text-lg font-semibold text-gray-700">Subtotal</p>
//               <p className="text-xl font-bold text-gray-900">${getTotal()}</p>
//             </div>

//             <div className="mt-6 text-right">
//               <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

