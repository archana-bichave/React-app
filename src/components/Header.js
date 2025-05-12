import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

export default Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex mb-16 justify-between gap-x-4 bg-white shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="logo-container w-24 text-orange-500 font-[cursive] font-bold mx-4 my-auto text-4xl">
        <span>YummyBite</span>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }
            >
              About
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="px-4 relative">
            <span className="absolute rounded-full bg-orange-400 w-6 h-6 bottom-4 left-8 text-center text-white">
              {cartItems.length}
            </span>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }
            >
              <FaCartArrowDown className="h-6 w-6"/>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
