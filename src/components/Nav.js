import React from 'react';
import { Navbar, Alignment} from "@blueprintjs/core";
import {Link} from "react-router-dom";

const Nav = () => (
    <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Rammy</Navbar.Heading>
              <Navbar.Divider />
              <Link className="bp3-minimal" to="/">Home</Link>
              <Navbar.Divider />
              <Link className="bp3-minimal" to="/about">About</Link>
            </Navbar.Group>
        </Navbar>
);

export default Nav;