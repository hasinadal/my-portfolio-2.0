import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SingleToolSection from "./SingleToolSection/SingleToolSection";
import { ToolsSectionData } from "./ToolsSectionData";

const ToolsSection = () => {
  return (
    <section class="pt-12" id="tools">
      <div class="container">
        <div class="text-center">
          <div class="menu-content">
            <div class="title text-center">
              <h1 class="mb-10">{SectionTitleHelper.tools}</h1>
            </div>
          </div>
        </div>

        <div class="row">
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
