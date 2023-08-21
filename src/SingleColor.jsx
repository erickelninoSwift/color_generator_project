import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const SingleColor = ({ colors, index }) => {
  const { hex, weight } = colors;

  const indexBackground = () => {};
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={() => console.log(`Color :${hex}`)}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
