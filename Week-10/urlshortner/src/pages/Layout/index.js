import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
}
