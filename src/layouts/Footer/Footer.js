import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import BackToTopButton from "../../sharedComponents/BackToTopButton";
import SocialMediaLinks from "../../sharedComponents/SocialMediaLinks";
import { FooterSocialMediaLinksData } from "./FooterSocialMediaLinksData";

const Footer = () => {
  return (
    <>
      <BackToTopButton />
      <footer className="footer-area section-gap" align="Center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="single-footer-widget">
                <h4>{SectionTitleHelper.footerSectionTitle}</h4>
              </div>
              <div className="d-flex justify-content-center">
                {FooterSocialMediaLinksData?.map((item) => (
                  <SocialMediaLinks url={item.url} icon={item.iconClass} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
