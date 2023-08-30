import React from "react";

const SectionTitle2 = (props) => {
  const { sectionTitleText, sectionCaptionText } = props;
  return (
    <section className="section4 overflow-hidden text-left text-md-left pt-70">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <p
              className=" text-uppercase let-space-2 font-w600 text-blue-new text-black"
              style={{ letterSpacing: "2px" }}
            >
              {sectionCaptionText}
            </p>
            <hr className="hrRed" />
            <h3 className=" font-w800 font-45 text-blue-new line-height-45 text-black">
              {sectionTitleText}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle2;
