import RestaurantCard from "./RestaurantCards";
import { restaurantsArr } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const getData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.374638644228302&lng=78.4300148114562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",);

        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="body">
            <h3 className="res-title">Top Restaurants in Hyderabad</h3>
            {/* <Shimmer/> */}
            <div style={{margin:"100px"}}>
                {""}
                <button onClick={getData}>GetData</button>
            </div>

            <div className="res-container">
                {/* {restaurantsArr.map((resObj) => {
                    return <RestaurantCard resDetail={resObj} key= {resObj.id} />;
                })} */}

            </div>
        </div>
    );
};

export default Body;