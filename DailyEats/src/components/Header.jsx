import { logoUrl } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="header-logo"
                    src= {logoUrl}
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
                    <button className="search-btn">🔍</button>
                </div>
            </div>

            <div className="signin-btn">
                <button>SIGN IN</button>
            </div>

        </div>
    );
};

export default Header;