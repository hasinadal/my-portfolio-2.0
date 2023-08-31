import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SingleToolSection from "./SingleToolSection/SingleToolSection";
import { ToolsSectionData } from "./ToolsSectionData";

const ToolsSection = () => {
  return (
    <section className="pt-12" id="tools">
      <div className="container">
        <SectionTitle sectionTitleText={SectionTitleHelper.tools} />
        <div className="row">
          {ToolsSectionData?.map((item) => (
            <SingleToolSection
              key={item.id}
              toolName={item.toolName}
              toolLogo={item.toolLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
