import React from "react";

const UiUxDescription = ({ pageContentProps }) => {
  return (
    <>
      <div className="title">
        <h3 className="mb-2">Description</h3>
      </div>
      {pageContentProps?.description?.map((desc, index) => (
        <div key={index}>
          <h5 className="mb-2">{desc?.descriptionTitle}</h5>
          <p className="text-justify" style={{ textAlign: "justify" }}>
            {desc?.descriptionContent}
          </p>
        </div>
      ))}
    </>
  );
};

export default UiUxDescription;
