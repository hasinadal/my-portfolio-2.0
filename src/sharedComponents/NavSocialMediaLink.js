import React from "react";

const NavSocialMediaLink = ({ url, iconClass }) => {
  return (
    <li>
      <a href="https://www.facebook.com/tabrezdal/">
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default NavSocialMediaLink;
