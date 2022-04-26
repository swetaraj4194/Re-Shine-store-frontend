import { Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <section className="">
      <footer class="text-white text-center web-color">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              {/* <h5 class="text-uppercase">ReShine Store</h5> */}
              <NavLink to="/" className="footer-logo">
                Re<span className="footer-right-logo">-Shine Store</span>
              </NavLink>
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
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
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
