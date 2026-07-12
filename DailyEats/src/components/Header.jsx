import { Link } from "react-router-dom";
import { logoUrl } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={logoUrl} />
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