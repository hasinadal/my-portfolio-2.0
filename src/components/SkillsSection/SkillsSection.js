import React from "react";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SimpleProgressbar from "../../sharedComponents/SimpleProgressBar";
import { SkillSectionData } from "./SkillSectionData";

const SkillsSection = () => {
  return (
    <section class="home-about-area section-gap" id="skills">
      <div class="container">
        <SectionTitle sectionTitleText={SkillSectionData?.sectionTitle} />
        <div class="row skillbar-wraps">
          <div class="col-lg-6 skill-left">
            <h4 class="pt-30 text-align: left">
              {SkillSectionData?.skillsCategories?.categoryTitle1}
            </h4>

            {SkillSectionData.skillsCategories.skills.map((item) => (
              <div class="single-skill">
                <p>{item.skill}</p>
                <SimpleProgressbar endValue={item.percetage} />
              </div>
            ))}
          </div>
          <div class="col-lg-6 skill-right">
            <h4 class="pt-30 text-rigth">
              {SkillSectionData?.skillsCategories?.categoryTitle2}
            </h4>

            {SkillSectionData.skillsCategories.tech.map((item) => (
              <div class="single-skill">
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
