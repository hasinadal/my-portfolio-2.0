import React from "react";

const NavigationLink = ({ linkTo, name }) => {
  return (
    <li>
      <a href={linkTo}>{name}</a>
    </li>
  );
};

export default NavigationLink;
