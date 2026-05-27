import React from "react";
import { motion } from "framer-motion";

const CaseStudyHero = ({ project }) => {
  return (
    <section
      style={{
        background: "#000",
        paddingTop: "100px",
        paddingBottom: "0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Meta row */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#62bdfc",
            }}
          >
            {project.category}
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>
            /
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
            }}
          >
            {project.year} · {project.duration}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            color: "#fff",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: "1.1",
            maxWidth: "760px",
            marginBottom: "20px",
          }}
        >
          {project.title}
        </motion.h1>

        {/* Short description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "16px",
            maxWidth: "600px",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}
        >
          {project.shortDescription}
        </motion.p>

        {/* Tags */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "4px 12px",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "20px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Cover image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ overflow: "hidden" }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          draggable="false"
          style={{
            width: "100%",
            maxHeight: "560px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>
    </section>
  );
};

export default CaseStudyHero;
