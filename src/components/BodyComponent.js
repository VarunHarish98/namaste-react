import RestroComponent from "./RestroComponent";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          id="mySearch"
          placeholder="Search Restruants"
          onChange={() => {
            let searchRestuarants = resList.filter((res) => {
              if (
                res?.data?.name?.toLowerCase()
                  .includes(
                    document.getElementById("mySearch").value?.toLowerCase()
                  )
              )
                return res;
            });
            setListOfRestuarants(searchRestuarants);
          }}
        ></input>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredListOfRestuarants = listOfRestuarants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestuarants(filteredListOfRestuarants);
          }}
        >
          Filter for Top Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestuarants.map((restaurant) => (
          <RestroComponent key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
