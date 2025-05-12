import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
    const handleCLick = () => {
        setShowIndex();
    }
  return (
    <div className="my-4">
      <div className="m-auto shadow-lg p-4 cursor-pointer flex justify-between" onClick={handleCLick}>
        <span>
          {data.title} ({data.itemCards?.length})
        </span>
        {
            showItems ? <span className=""><i className="fa fa-arrow-down"></i></span> :
        <span className=""><i className="fa fa-arrow-up"></i></span>
}
      </div>
      {data.itemCards?.map((item, index) => <ItemsList key={Math.random()} item={item} isExpanded={showItems}></ItemsList>)}
    </div>
  );
};

export default RestaurantCategory;
