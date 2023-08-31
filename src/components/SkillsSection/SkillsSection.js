import React from "react";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SimpleProgressbar from "../../sharedComponents/SimpleProgressBar";
import { SkillSectionData } from "./SkillSectionData";

const SkillsSection = () => {
  return (
    <section className="home-about-area section-gap" id="skills">
      <div className="container">
        <SectionTitle sectionTitleText={SkillSectionData?.sectionTitle} />
        <div className="row skillbar-wraps">
          <div className="col-lg-6 skill-left">
            <h4 className="pt-30 text-align: left">
              {SkillSectionData?.skillsCategories?.categoryTitle1}
            </h4>

            {SkillSectionData.skillsCategories.skills.map((item) => (
              <div className="single-skill" key={item.skill}>
                <p>{item.skill}</p>
                <SimpleProgressbar endValue={item.percetage} />
              </div>
            ))}
          </div>
          <div className="col-lg-6 skill-right">
            <h4 className="pt-30 text-rigth">
              {SkillSectionData?.skillsCategories?.categoryTitle2}
            </h4>

            {SkillSectionData.skillsCategories.tech.map((item) => (
              <div className="single-skill" key={item.skill}>
                <p>{item.skill}</p>
                <SimpleProgressbar endValue={item.percetage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
