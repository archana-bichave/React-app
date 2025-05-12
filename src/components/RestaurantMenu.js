import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';
import { Link } from 'react-router';
import { useState } from "react";
import FullscreenLoader from "./common/Spinner";

const RestaurantMenu = () => {
  const resId = useParams();
  const restaurantDetails = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantDetails === null) return <FullscreenLoader />;
  else {
    const restaurantCategories = restaurantDetails.data.cards[4].groupedCard.cardGroupMap?.['REGULAR'].cards.filter((card) => {
      return card.card.card?.['@type'].includes('ItemCategory');
    });
    const {
      name,
      cuisines,
      cloudinaryImageId,
      costForTwoMessage,
      avgRating,
      totalRatingsString,
      locality,
      sla,
    } = restaurantDetails.data?.cards[2]?.card?.card?.info;

    console.log('****', restaurantCategories);
    return (
      <div className="px-44">
        <div>
          <Link to="/"><p><i className="fa fa-arrow-left" ></i> Back to Results</p></Link>
        </div>
        <h1 className="bold font-bold text-2xl mb-12">{name}</h1>
        <div className="border rounded-b-2xl bg-white shadow-lg p-8 outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-35 dark:outline-white/10">
          <div>
            <div>
              <div className="font-bold text-md">
                <i className="fa fa-star"></i> {avgRating} ({totalRatingsString}
                ) • {costForTwoMessage}
              </div>
              <div className="underline text-orange-400">
                {cuisines.join(", ")}
              </div>
              <div className="my-4">
                <span className="text-gray-500">•</span>{" "}
                <span className="font-bold">Outlet</span>{" "}
                <span className="text-gray-500">{locality}</span>
              </div>
              <div className="font-bold">
                <span className="text-gray-500">•</span> {sla.slaString}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          {restaurantCategories.map((category, index) => 
          {
            if(category.card.card && category.card.card?.itemCards?.length > 0) {
              return <RestaurantCategory key={index} data={category.card.card} showItems={showIndex === index} setShowIndex={() => setShowIndex(index)}></RestaurantCategory>
            }
          }
          )}
        </div>
      </div>
    );


  }
};

export default RestaurantMenu;
