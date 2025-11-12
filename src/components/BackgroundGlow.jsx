import React from "react";

const BackgroundGlow = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-teal-400/30 via-purple-400/20 to-teal-300/30 ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default BackgroundGlow;
