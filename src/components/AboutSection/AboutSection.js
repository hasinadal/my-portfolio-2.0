import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { AboutSectionData } from "./AboutSectionData";

const AboutSection = () => {
  return (
    <section class="home-about-area pt-30" id="about">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-4 col-md-4 home-about-left">
            <img
              draggable="false"
              class="img-fluid"
              src={AboutSectionData?.sectionImage}
              alt=""
            />
          </div>
          <div class="col-lg-7 col-md-7 home-about-right">
            <h1 class="text-uppercase mb-2">
              {AboutSectionData?.sectionTitle}
            </h1>
            {AboutSectionData?.description?.map((item) => (
              <p class="text-justify" key={item.id}>
                {item.desc}
              </p>
            ))}

            <PrimaryButton
              name={AboutSectionData?.buttonData?.name}
              url={AboutSectionData?.buttonData?.url}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
