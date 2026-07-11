import RestaurantCard from "./RestaurantCards";
import { restaurantsArr } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    return (
        <div className="body">
            <h3 className="res-title">Top Restaurants in Hyderabad</h3>
            <Shimmer/>
            <div className="res-container">
                {/* {restaurantsArr.map((resObj) => {
                    return <RestaurantCard resDetail={resObj} key= {resObj.id} />;
                })} */}

            </div>
        </div>
    );
};

export default Body;