import { RESTRO_URL } from "../utils/constant";
// Restro Component
const RestroComponent = (props) => {
  const { resData } = props;
  let { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
    resData?.data;
  return (
    // 2 {{}} - to indicate one is for js and other is for object
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={`${RESTRO_URL}${cloudinaryImageId}`}
        className="restro-img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>₹{Math.ceil(costForTwo / 100)} FOR TWO</h4>
    </div>
  );
};

export default RestroComponent;