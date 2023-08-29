import React from "react";

const PrimaryButton = ({ url, name }) => {
  return (
    <a href={url} className="primary-btn">
      {name}
    </a>
  );
};

export default PrimaryButton;
