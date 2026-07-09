import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="header-logo"
                    src="https://ik.imagekit.io/efijthc6h/logo-img.jfif?updatedAt=1783577220798"
                />
            </div>

            {/* <div className="search-bar">
                <input type="text" className="inp-text" placeholder="Search for Restaurant or Food" />
            </div> */}

            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CART</li>
                    <li>CONTACT</li>
                </ul>
                <div className="search-bar">
                    <input type="text" className="inp-text" placeholder="Search Food" />
                    <button className="search-btn">Search</button>
                </div>
            </div>

            <div className="signin-btn">
                <button>SIGN IN</button>
            </div>

        </div>
    );
};


const HeroSection = () => {
    return (
        <div className="hero">
            <img src="https://ik.imagekit.io/efijthc6h/hero-img.jfif" alt="Food" className="hero-image" />

            <div className="hero-content">
                <h1>
                    CHOOSE <br />
                    <span>BEST</span> FOOD
                </h1>
                {/* <p>
                    Delicious Food at your Door Step<br />
                    In a Minutes
                </p> */}

                <button>ORDER NOW!</button>
            </div>
        </div>
    )
};


const RestaurantCard = (props) => {
    {


        // let props = {
        //     resName: "Mehfil",
        //     rating: 5,
        //          let props = {

        //         resDetail: {
        //             id: "40377",
        //             resName: "Lucky Restaurant",
        //             cuisine: ["Biryani", "Tandoor"],
        //             avgRating: 4.3,
        //             delieveryTime: 36,
        //             costForTwo: "₹300 for two",
        //             imgId: "uvapcfajlsbctskdhuhl",
        //             location: "Santosh Nagar",
        //         },
        //     }

        // }
    }

    const restaurantObj = props.resDetail;
    // {
    //   id: "40377",
    //   resName: "Lucky Restaurant",
    //   cuisine: ["Biryani", "Tandoor"],
    //   avgRating: 4.3,
    //   delieveryTime: 36,
    //   costForTwo: "₹300 for two",
    //   imgId: "uvapcfajlsbctskdhuhl",
    //   location: "Santosh Nagar",
    // }

    return (
        <div className="res-card">
            <div className="res-img-container">
                <img
                    className="res-logo"
                    alt="res-logo"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantObj.imgId}`}
                />
            </div>
            <h3 className="res-title">{restaurantObj.resName}</h3>
            <h4>{restaurantObj.cuisine}</h4>
            <h4>⭐️ {restaurantObj.avgRating} Stars</h4>
            <h4>
                {restaurantObj.delieveryTime} mins | {restaurantObj.costForTwo}
            </h4>
        </div>
    );
};

const restaurantsArr = [
    {
        id: "40377",
        resName: "Lucky Restaurant",
        cuisine: ["Biryani", "Tandoor"],
        avgRating: 4.3,
        delieveryTime: 36,
        costForTwo: "₹300 for two",
        imgId: "uvapcfajlsbctskdhuhl",
        location: "Santosh Nagar",
    },
    {
        id: "79706",
        resName: "Shah Ghouse Hotel & Restaurant",
        cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
        avgRating: 4.4,
        delieveryTime: 30,
        costForTwo: "₹350 for two",
        imgId: "ggbuknqzqc4qoqfnl2cr",
        location: "Charminar",
    },
    {
        id: "150646",
        resName: "Cream Stone Ice Cream",
        cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
        avgRating: 4.4,
        delieveryTime: 30,
        costForTwo: "₹250 for two",
        imgId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
        location: "Himayath Nagar",
    },
];

const Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                <RestaurantCard resDetail={restaurantsArr[0]} />
                <RestaurantCard resDetail={restaurantsArr[1]} />
                <RestaurantCard resDetail={restaurantsArr[2]} />

{/* 

                {
                    resDetail: {
                    id: "40377",
                resName: "Lucky Restaurant",
                cuisine: ["Biryani", "Tandoor"],
                avgRating: 4.3,
                delieveryTime: 36,
                costForTwo: "₹300 for two",
                imgId: "uvapcfajlsbctskdhuhl",
                location: "Santosh Nagar",
  },
        }
 */}

            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">

            <h4>© 2024 Arshad Azeem. All rights reserved.</h4>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)