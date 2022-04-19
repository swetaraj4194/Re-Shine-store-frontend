import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <NavLink to="/" className="footer-logo">
          Re<span className="footer-right-logo">-Shine Store</span>
        </NavLink>
      </div>
      <div className="footer-right">
        <div className="categories">
          <h3 className="footer-title">Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Furniture</li>
            <li>Home Decoration</li>
            <li>Plants</li>
          </ul>
          {/* ^ should be replaced with links in the future */}
        </div>
        <div className="account">
          <h3 className="footer-title">My account</h3>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
          {/* ^ should be replaced with links in the future */}
        </div>
        <div className="contacts-social-link">
          <h3 className="footer-title">Follow us</h3>
          <div className="links-img"></div>
          {/* <div className="social-links">
            <div className="social-links-item facebook-footer"></div>
            <div className="social-links-item instagram-footer"></div>
            <div className="social-links-item twitter-footer"></div>
            ^ should be replaced with links in the future
          </div> */}
        </div>
      </div>
    </div>
  );
}

// export { Footer };
