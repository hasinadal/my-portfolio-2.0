import React from "react";

const NavSocialMediaLink = ({ url, iconClass }) => {
  return (
    <li>
      <a href={url}>
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default NavSocialMediaLink;
