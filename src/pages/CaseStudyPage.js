import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import CaseStudyHero from "../components/CaseStudyComps/CaseStudyHero/CaseStudyHero";
import CaseStudyOverview from "../components/CaseStudyComps/CaseStudyOverview/CaseStudyOverview";
import CaseStudyProcess from "../components/CaseStudyComps/CaseStudyProcess/CaseStudyProcess";
import CaseStudyOutcome from "../components/CaseStudyComps/CaseStudyOutcome/CaseStudyOutcome";
import CaseStudyGallery from "../components/CaseStudyComps/CaseStudyGallery/CaseStudyGallery";
import CaseStudyNav from "../components/CaseStudyComps/CaseStudyNav/CaseStudyNav";
import FeaturedProjectsData from "../Data/FeaturedProjectsData";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = FeaturedProjectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Case Study | Tabrez Dal`;
    }
  }, [slug, project]);

  // 404 guard — redirect to home if slug not found
  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <Header />
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyProcess project={project} />
      <CaseStudyOutcome project={project} />
      <CaseStudyGallery project={project} />
      <CaseStudyNav project={project} />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
