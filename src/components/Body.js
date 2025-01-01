import React, { useState } from "react";
import ResCard from "./ResCard";
import { swiggyData } from "../utils/swiggyData";

const restaurants = swiggyData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

const Body = function () {

    const [filteredRestaurants, setfilteredRestaurants] = useState(restaurants);

    const search = () => {
        const searchInput = document.getElementById("main-search").value.toLowerCase();

        const filtered = restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchInput)
        );

        setfilteredRestaurants(filtered);
    };

    return (
        <div className="body-div">
            <div className="search-div">
                <input id="main-search" type="text" placeholder="Search" onKeyUp={search} />
            </div>

            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <ResCard r={res.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;