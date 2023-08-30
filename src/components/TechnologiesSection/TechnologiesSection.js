import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SingleTechnologySection from "./SingleTechnologySection/SingleTechnologySection";
import { TechnologiesSectionData } from "./TechnologiesSectionData";

const TechnologiesSection = () => {
  return (
    <section class="pt-30" id="technologies">
      <div class="container">
        <SectionTitle sectionTitleText={SectionTitleHelper.technologies} />
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
