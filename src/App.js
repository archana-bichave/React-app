import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import  Body  from "./components/Body";
import  Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Footer from "./components/Footer";

// Lazy loading a component
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
    element: <Body/>,
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <Suspense fallback={<h1>Loading....</h1>}> <RestaurantMenu /></Suspense>
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
