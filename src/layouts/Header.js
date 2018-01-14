import React from 'react'
import glamorous from 'glamorous'

import LinkNavbar from '../components/LinkNavbar.js'

import bg1Jpg from '../images/bg1.jpg'

const Nav = glamorous.nav({
  backgroundImage: `url(${bg1Jpg})`,
})

const Header = () => (
  <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    asd
    <div className="container">
      <LinkNavbar className="navbar-brand" to="/">
        PyCon APAC 2018
      </LinkNavbar>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <LinkNavbar className="nav-link" to="/">
              Home
            </LinkNavbar>
          </li>
          <li className="nav-item dropdown">
            <LinkNavbar
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Event
            </LinkNavbar>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <LinkNavbar className="dropdown-item" to="#">
                Talks & Workshops
              </LinkNavbar>
              <div className="dropdown-divider" />
              <LinkNavbar to="/code-of-conduct/" className="dropdown-item">
                Code of Conduct
              </LinkNavbar>
            </div>
          </li>
          <li className="nav-item">
            <LinkNavbar className="nav-link" to="/venue/">
              Venue
            </LinkNavbar>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
)

export default Header
