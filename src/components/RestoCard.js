import { CDN_BASE_URL } from "../utils/constants";

export default RestoCard = (props) => {
  console.log('props', props);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.resData;
  return (
    <div data-testId="resCard" className="flex flex-col p-3 w-80 m-4 rounded-lg hover:shadow-lg hover:outline-black/5 hover:dark:bg-slate-800 hover:dark:shadow-none hover:dark:-outline-offset-1 hover:dark:outline-white/9">
      <img
        alt="resto-logo"
        className="rounded-t-lg h-52 mb-4"
        src={CDN_BASE_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <div className="cuisines secondary-text">{cuisines.join(", ")}</div>
      <div className="ratings secondary-text">
        <span className="fa fa-star checked"></span> {avgRating} ratings
      </div>
      <div className="time secondary-text">{sla.slaString} minutes</div>
      <div className="cost-for-two secondary-text">{costForTwo}</div>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <RestoCard {...props}></RestoCard>
      </div>
    );
  };
};

