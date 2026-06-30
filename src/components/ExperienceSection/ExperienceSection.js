import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animationVariants';
import { ExperienceData, EducationData } from '../../Data/ExperienceData';
import './ExperienceSection.css';

const RoleBlock = ({ exp, index, onActivate }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="exp-role-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => onActivate(index)}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="exp-role-block__index">{String(index + 1).padStart(2, '0')}</div>

      <div className="exp-role-block__content">
        <h3 className="exp-role-block__role">{exp.role}</h3>
        <p className="exp-role-block__company">
          {exp.company}
          {exp.client && <span className="exp-role-block__client"> · {exp.client}</span>}
        </p>

        <div className="exp-role-block__meta">
          <span>{exp.period}</span>
          <span className="exp-role-block__dot">•</span>
          <span>{exp.location}</span>
          <span className="exp-role-block__dot">•</span>
          <span className="exp-role-block__type">{exp.type}</span>
        </div>

        <ul className="exp-role-block__highlights">
          {exp.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="exp-role-block__skills">
          {exp.skills.map((skill) => (
            <span key={skill} className="exp-role-block__skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StickyVisualPanel = ({ activeExp, progress }) => {
  if (!activeExp) return null;

  return (
    <div className="exp-sticky-panel" style={{ '--exp-accent': activeExp.color }}>
      <div className="exp-sticky-panel__inner">

        {/* Thumbnail stack with scroll-tied parallax */}
        <div className="exp-sticky-panel__thumbs">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              className="exp-thumb-stack"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeExp.thumbnails.map((thumb, i) => (
                <motion.div
                  key={i}
                  className="exp-thumb-stack__item"
                  style={{ '--thumb-index': i, '--thumb-total': activeExp.thumbnails.length }}
                  animate={{ y: progress * (i % 2 === 0 ? -14 : 14) }}
                  transition={{ type: 'tween', duration: 0.1 }}
                >
                  <img src={thumb} alt="" loading="lazy" width={220} height={150} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Company mark */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id + '-mark'}
            className="exp-sticky-panel__mark"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="exp-sticky-panel__initial">{activeExp.company.charAt(0)}</div>
            <p className="exp-sticky-panel__company-name">{activeExp.company}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Subtle parallax value derived from scroll position within the section
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [parallaxValue, setParallaxValue] = useState(0);

  React.useEffect(() => {
    const unsub = parallax.on('change', (v) => setParallaxValue(v));
    return unsub;
  }, [parallax]);

  const activeExp = ExperienceData[activeIndex] || ExperienceData[0];

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="experience-section__header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="eyebrow-label">EXPERIENCE</p>
          <h2 className="experience-section__title">So Far, So Good</h2>
          <p className="experience-section__subtitle">
            5+ years across healthcare, SaaS, e-commerce, and branding —
            building scalable products end to end.
          </p>
        </motion.div>

        <div className="exp-layout">
          {/* Progress rail */}
          <div className="exp-progress-rail" aria-hidden="true">
            {ExperienceData.map((exp, i) => (
              <div
                key={exp.id}
                className={`exp-progress-dot ${i <= activeIndex ? 'exp-progress-dot--active' : ''}`}
              />
            ))}
          </div>

          {/* Sticky visual panel — desktop only */}
          <div className="exp-sticky-col">
            <StickyVisualPanel activeExp={activeExp} progress={parallaxValue} />
          </div>

          {/* Scrolling content */}
          <div className="exp-content-col">
            {ExperienceData.map((exp, i) => (
              <RoleBlock
                key={exp.id}
                exp={exp}
                index={i}
                onActivate={setActiveIndex}
              />
            ))}

            {/* Education block */}
            <motion.div
              className="exp-role-block exp-role-block--education"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="exp-role-block__index">{String(ExperienceData.length + 1).padStart(2, '0')}</div>
              <div className="exp-role-block__content">
                <p className="exp-role-block__edu-label">EDUCATION</p>
                <h3 className="exp-role-block__role">{EducationData.degree}</h3>
                <p className="exp-role-block__company">{EducationData.institution}</p>
                <div className="exp-role-block__meta">
                  <span>{EducationData.period}</span>
                  <span className="exp-role-block__dot">•</span>
                  <span>CGPA {EducationData.cgpa}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
