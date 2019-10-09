import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import bg1Jpg from "../images/bg1.jpg";
import LogoSvg from "../images/pycon-sg-2019-logo.svg";

const NavBg = styled.nav`
  background-image: url(${bg1Jpg});
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <NavBg>
        <div className="container">
          <Navbar color="faded" dark expand="md">
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              <img
                src={LogoSvg}
                alt="PyCon Singapore 2019"
                style={{ width: "200px" }}
              />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/event/" className="nav-link">
                    Event
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/sponsors/" className="nav-link">
                    Sponsors
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/venue/" className="nav-link">
                    Venue
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/news/" className="nav-link">
                    News
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/archives/" className="nav-link">
                    Archives
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </NavBg>
    );
  }
}

export default Header;
