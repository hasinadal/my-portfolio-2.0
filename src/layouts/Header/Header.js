import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import NavigationLink from "../../sharedComponents/NavigationLink";
import NavSocialMediaLink from "../../sharedComponents/NavSocialMediaLink";
import { MobileMenuModal } from "./MobileMenuModal/MobileMenuModal";
import { NavLinkData, NavSocialMediaLinkData } from "./NavBarData";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <Button variant="primary" id="mobile-nav-toggle" onClick={handleShow}>
        <i className="lnr lnr-menu"></i>
      </Button>
      <MobileMenuModal handleClose={handleClose} show={show} />
      <header id="header">
        <div className="container main-menu">
          <div className="align-items-center justify-content-between d-flex">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                {NavLinkData?.map((item) => (
                  <NavigationLink
                    key={item.id}
                    linkTo={item.linkTo}
                    name={item.name}
                  />
                ))}
              </ul>
            </nav>

            <div id="logo">
              <a href="/">
                <h2 style={{ color: "#04091e" }}>
                  {SectionTitleHelper.headerSectionTitle}
                </h2>
              </a>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu nav-menu-right">
                {NavSocialMediaLinkData?.map((item) => (
                  <NavSocialMediaLink
                    key={item.id}
                    url={item.url}
                    iconClass={item.iconClass}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
