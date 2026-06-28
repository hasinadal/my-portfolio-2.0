import React from "react";

function SimpleProgressbar(props) {
  const { skill, percetage } = props;
  return (
    <div className="progress" style={{ maxHeight: '10px' }}>
      <div
        role="progressbar"
        className="progress-bar"
        aria-label={`${skill} — ${percetage}%`}
        aria-valuenow={percetage}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${percetage}%` }}
      />
    </div>
  );
}

export default SimpleProgressbar;
