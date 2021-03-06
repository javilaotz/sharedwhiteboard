import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const NavBar = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shared Whiteboard</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;