import { Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="">
      <footer class="text-white text-center web-color">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <NavLink to="/" className="footer-logo">
                Re<span className="footer-right-logo">-Shine Store</span>
              </NavLink>

              <p>
                We build leading destinations for buying, selling, and
                exchanging products and services.The collection consists of
                unique hand-selected vintage bohemian clothing, bags and
                accessories with their own story and good vibes.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">categories</h5>

              <ul class="list-unstyled mb-0">
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
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Social Media</h5>

              <ul class="list-unstyled" >
                <li>
                  {" "}
                  <a href="#!">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#!">
                    {" "}
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#!">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#!">
                    <FiYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          © 2022 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            ReshineStore.com
          </a>
        </div>
      </footer>
    </section>
  );
}
