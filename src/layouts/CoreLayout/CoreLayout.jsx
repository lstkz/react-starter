import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


export const CoreLayout = ({children, user}) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title={user.email} id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
    <div className="container">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default connect((state) => ({user: state.global.user}))(CoreLayout);
