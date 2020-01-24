import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Head, Nav } from "./Navbar-styles";
export default class Navbar extends Component {
  render() {
    return (
      <Head>
        <h1>Zen Wear</h1>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/all">All</Link>
            </li> */}
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </Nav>
      </Head>
    );
  }
}
