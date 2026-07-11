import RestaurantCard from "./RestaurantCards";
// import { restaurantsArr } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { swiggyUrl } from "../utils/constants";
import { useState, useEffect } from "react";

const Body = () => {

    const [hotelList, setHotelList] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch(swiggyUrl);

        const data = await response.json();
        console.log(
            data.data.cards[1]?.gridElements?.infoWithStyle?.restaurants
        );

        setHotelList(
            data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        console.log("hotel list", hotelList);
    };

    if (hotelList === null) {
        return <Shimmer />
    }


    return (
        <div className="body">
            <h3 className="res-title">Top Restaurants in Hyderabad</h3>


            <div className="res-container">
                {hotelList.map((resObj) => {
                    return (
                        <RestaurantCard resDetail={resObj?.info} key={resObj?.info?.id} />
                    );
                })}

            </div>
        </div>
    );
};

export default Body;