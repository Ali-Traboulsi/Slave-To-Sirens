import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/bio">
              Bio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="events">
              Events
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/discography">
              Discography
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
