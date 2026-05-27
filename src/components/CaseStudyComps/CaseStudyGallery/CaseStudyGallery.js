import React from "react";
import { motion } from "framer-motion";
import FigmaFrame from "../../../layouts/FigmaFrame/FigmaFrame";

const CaseStudyGallery = ({ project }) => {
  return (
    <section style={{ background: "#f9f9ff", padding: "80px 0" }}>
      <div className="container">
        {/* Label */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "40px" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#0378b8",
              marginBottom: "10px",
            }}
          >
            Live Prototype
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 600,
              color: "#222",
            }}
          >
            Explore the Figma design
          </h2>
        </motion.div>

        {/* Figma embed — reuses existing FigmaFrame component */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FigmaFrame url={project.figmaEmbed} />
        </motion.div>

        {/* Static image gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="row mt-30">
            {project.gallery.map((img, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="col-md-6 col-sm-12 mb-4"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  draggable="false"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    display: "block",
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGallery;
