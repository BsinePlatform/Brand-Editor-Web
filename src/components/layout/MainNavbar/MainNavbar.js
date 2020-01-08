import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar, NavbarBrand } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <div className="nav-company-brand">
        <img
          id="main-logo"
          className="d-inline-block mr-1"
          style={{ maxWidth: "45px" }}
          src={require("../../../images/logo-test.png")}
          alt="Bsine"
        />
        <span className="d-none d-md-inline ml-1">
          Logo
        </span>
      </div>
      <div className="nav-store-link">
        <a>
          <i class="fas fa-lg fa-external-link-alt" style={{ padding: "5px" }}></i>
          Acesso a Loja
        </a>
      </div>
      <Container className="nav-align p-0">
        <Navbar type="light" className="flex-md-nowrap p-0">
          {/* <NavbarBrand
            className="mr-0"
            href="#"
            // style={{ lineHeight: "25px" }}
          >
            <div className="nav-brand d-table">
              <img
                id="main-logo"
                className="d-inline-block mr-1"
                style={{ maxWidth: "45px" }}
                src={require("../../../images/logo-test.png")}
                alt="Bsine"
              />
                <span className="d-none d-md-inline ml-1">
                  Logo
                </span>
            </div>
          </NavbarBrand> */}
          <NavbarSearch />
          <NavbarNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
