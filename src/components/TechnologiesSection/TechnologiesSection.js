import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SingleTechnologySection from "./SingleTechnologySection/SingleTechnologySection";
import { TechnologiesSectionData } from "./TechnologiesSectionData";

const TechnologiesSection = () => {
  return (
    <section class="pt-30" id="technologies">
      <div class="container">
        <div class="text-center">
          <div class="menu-content">
            <div class="title text-center">
              <h1 class="mb-10">{SectionTitleHelper.technologies}</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {TechnologiesSectionData?.FeatureTech.map((item) => (
            <SingleTechnologySection
              key={item.id}
              techName={item.techName}
              techLogo={item.techIcon}
              featured={true}
            />
          ))}
          {TechnologiesSectionData?.NormalTech.map((item) => (
            <SingleTechnologySection
              key={item.id}
              techName={item.techName}
              techLogo={item.techIcon}
              featured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
