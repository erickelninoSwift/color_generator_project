import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const SingleColor = ({ colors, index }) => {
  const { hex, weight } = colors;
  const saveToclipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Clipboard Color Copied");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Clipboard access");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={() => saveToclipBoard()}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
