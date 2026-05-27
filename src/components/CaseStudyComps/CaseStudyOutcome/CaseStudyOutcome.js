import React from "react";
import { motion } from "framer-motion";

const CaseStudyOutcome = ({ project }) => {
  return (
    <section
      style={{
        background: "#000",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left — outcome text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-lg-6 col-md-6"
            style={{ marginBottom: "40px" }}
          >
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#62bdfc",
                marginBottom: "16px",
              }}
            >
              Key Outcomes
            </p>
            <p
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.6",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {project.outcome}
            </p>
          </motion.div>

          {/* Right — metrics */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.35 }}
            className="col-lg-5 offset-lg-1 col-md-6"
          >
            <div className="row">
              {project.metrics.map((m, index) => (
                <div
                  key={index}
                  className="col-sm-4 col-4"
                  style={{ textAlign: "center", marginBottom: "24px" }}
                >
                  <p
                    style={{
                      fontSize: "clamp(22px, 3vw, 32px)",
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginTop: "6px",
                      marginBottom: 0,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOutcome;
