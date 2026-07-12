import { heroimgUrl } from "../utils/constants";

const HeroSection = () => {
    return (
        <div className="hero">
            <img src={heroimgUrl} alt="Food" className="hero-image" />

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


export default HeroSection;