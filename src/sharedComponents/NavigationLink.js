import React from "react";
import { Link } from "react-scroll";

const NavigationLink = ({ linkTo, name }) => {
  return (
    <li className="navlink">
      <Link to={linkTo} smooth={true} offset={-70} duration={1000} delay={300}>
        {name}
      </Link>
    </li>
  );
};

export default NavigationLink;
