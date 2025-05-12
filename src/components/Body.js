import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import FullscreenLoader from "./common/Spinner";
// import { useSelector } from "react-redux";

// let resList = restaurantList;

export default Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [header, setHeader] = useState("");
  // const cartItems = useSelector((store) => store.restaurants.items || []);
  // console.log('############cartItems', cartItems);
  useEffect(() => {
    fetchData();
  }, []);

  const isOnline = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestoCard);
  if(!isOnline) {
    return (
      <h1>Oops!! Looks like you are offline, please check your internet connect.</h1>
    )
  }
  const fetchData = async () => {

    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();

    const restaurantListWithGridElements = list?.data?.cards.filter((cardObj) => {
      return cardObj.card.card.hasOwnProperty('gridElements')
    });
    const restaurantObj = restaurantListWithGridElements.find((ele) => {
      return ele.card.card.gridElements.infoWithStyle['@type'].toLowerCase().includes('restaurant')
    });

    setHeader(list?.data?.cards[1].card.card.header.title);
    console.log('****', header);

    setListOfRestaurant(
      restaurantObj?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      restaurantObj?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onSearchInputChange = (e) => {
    setSearchText(e.target.value);
    if(e.target.value.length >= 3) {
      const resList = listOfRestaurant.filter(
        (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredListOfRestaurant(resList);
    }
  }

  const onSearchInputKeyUp = () => {
    if(searchText.length === 0) {
      setFilteredListOfRestaurant(listOfRestaurant);
    }
  }

  return !listOfRestaurant?.length ? (
    <FullscreenLoader />
  ) : (
    <div className="px-44">
      <div className="font-bold text-3xl mb-16 px-20">{header}</div>
      <div className="flex justify-between mb-16 px-20">
        <div className="search-container">
          <div className="search-wrapper">
          <input type="text" placeholder="Search restaurant" className="border border-solid border-gray h-12 w-96 rounded-lg p-4" value={searchText} onChange={(e) => onSearchInputChange(e) } onKeyUp={() => {onSearchInputKeyUp()}}></input>
          </div>
        </div>
        <button
          className="px-8 bg-orange-500 hover:bg-orange-600 rounded-lg text-white"
          onClick={() => {
            const resList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setFilteredListOfRestaurant(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap px-12">
        {filteredListOfRestaurant.map((resto) => {
          // Not showing diff, as promoted property has been removed from Swiggy API
          // This is just to showcase Higher Order components in React (which takes compo as input and returns comp)
          return <Link to={"/restaurant/"+resto.info.id} key={resto.info.id}> {
            resto.info.promoted ? <RestaurantCardPromoted resData={resto.info} /> : <RestoCard resData={resto.info} />
          }
            </Link>;
        })}
      </div>
    </div>
  );
};
