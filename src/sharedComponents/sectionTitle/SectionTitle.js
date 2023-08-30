import React from "react";

const SectionTitle = (props) => {
  const { sectionTitleText } = props;
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="menu-content col-lg-8">
        <div className="title text-center">
          <h1 className="text-uppercase mb-10">{sectionTitleText}</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
