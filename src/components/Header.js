import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
    <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    alt="logo" className="logo"/>
    </a>
);

// React Component
// Functional component it is a javascript function
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return ( 
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
            </ul>
        </div>
        {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    );
};

export default Header;