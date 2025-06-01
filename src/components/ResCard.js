import { imgs_url } from "../utils/swiggyData";

const ResCard = (props) => {
  return (
    <div className="res-card">
      <img src={imgs_url + props.r.cloudinaryImageId} />

      <h3>{props.r.name}</h3>
      <h4>{props.r.avgRating}★</h4>
    </div>
  );
};

export default ResCard;
