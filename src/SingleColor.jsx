import React from "react";

export const SingleColor = ({ colors, index }) => {
  const { hex, weight } = colors;
  const backgroundStyle = {
    backgroundColor: `#${hex}`,
  };

  const indexBackground = () => {};
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
