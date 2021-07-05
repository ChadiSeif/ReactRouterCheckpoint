import React from "react";
import { Navbar } from "react-bootstrap";

export const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-movie-board-icon-image_1455346.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Welcome to my movie App
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
