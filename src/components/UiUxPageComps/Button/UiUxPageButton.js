import React from "react";

const UiUxPageButton = ({ url, name }) => {
  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className="primary-btn black-btn text-uppercase"
    >
      {name}
    </button>
  );
};

export default UiUxPageButton;
