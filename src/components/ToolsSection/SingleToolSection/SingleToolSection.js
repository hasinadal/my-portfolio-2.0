import React from "react";

const SingleToolSection = ({ toolName, toolLogo }) => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-6 col-6">
      <div className="single-services">
        <span>
          <img draggable="false" src={toolLogo} alt={toolName} />
        </span>
        <a href="#">
          <h4>{toolName}</h4>
        </a>
      </div>
    </div>
  );
};

export default SingleToolSection;
