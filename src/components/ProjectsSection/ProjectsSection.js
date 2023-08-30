import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import ProjectsTabsContainer from "./ProjectsTabs/ProjectsTabsContainer";

const ProjectsSection = () => {
  return (
    <>
      <section className="portfolio-area section-gap" id="portfolio">
        <div className="container">
          <SectionTitle sectionTitleText={SectionTitleHelper.projects} />
          <ProjectsTabsContainer />
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
