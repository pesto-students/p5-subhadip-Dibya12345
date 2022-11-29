import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h2>TODO</h2>
          <h3>APP</h3>
        </div>
      </div>
    );
  }
}
