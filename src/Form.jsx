import React from "react";
import { useState } from "react";
import Values from "values.js";

export const Form = ({ setCurrentColor, colorTost }) => {
  const [color, setColor] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    try {
      let gradientColor = new Values(color).all(10);
      setCurrentColor(gradientColor);
      colorTost.success("Color was succesfully picked");
    } catch (error) {
      console.log(`Error Found : ${error}`);
      colorTost.error(error.message);
    }
  }

  const buttonStyle = {
    background: `${color}`,
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "bold",
  };

  return (
    <form className="color-form" onSubmit={(e) => HandleSubmit(e)}>
      <h4 className="colors">Color Generator</h4>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#80B192"
      />
      <button type="submit" className="btn" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};
