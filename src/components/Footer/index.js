import { Nav } from "react-bootstrap";
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
            <li>
              
              <Nav.Link href="/category/1">Electronics</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/category/2">Jewelery</Nav.Link>
            </li>
            <li>
              
              <Nav.Link href="/category/3">Men's Clothing</Nav.Link>
            </li>
            <li>
              
              <Nav.Link href="/category/4">Women's Clothing</Nav.Link>
            </li>
            <li>
              
              <Nav.Link href="/category/5">Furniture</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/category/6">Home Decoration</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/category/7">Plants</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/category/8">Other</Nav.Link>
            </li>
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
        </div>
      </div>
    </div>
  );
}
