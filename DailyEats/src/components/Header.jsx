import { Link } from "react-router-dom";
import { logoUrl } from "../utils/constants";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="header-logo" src={logoUrl} alt="DailyEATS logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="nav-link-btn" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="nav-link-btn" to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link className="nav-link-btn" to="/cart">CART</Link>
                    </li>
                    <li>
                        <Link className="nav-link-btn" to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <div className="search-bar">
                    <input type="text" className="inp-text" placeholder="Search food or restaurants" />
                    <button className="search-btn">🔍</button>
                </div>
            </div>

            <div className="signin-btn">
                <button>Sign In</button>
            </div>
        </header>
    );
};

export default Header;