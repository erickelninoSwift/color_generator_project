import React from "react";
import { useState } from "react";

export const Form = () => {
  const [color, setColor] = useState("#99f924");

  function HandleSubmit(e) {
    e.preventDefault();
    console.log("Hello world");
  }

  return (
    <form className="color-form" onSubmit={(e) => HandleSubmit(e)}>
      <h4 className="colors">Color Generator</h4>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input
        type="text"
        value=""
        onChange={(e) => setColor(e.target.value)}
        placeholder={color}
      />
      <button
        type="submit"
        className="btn"
        style={{ background: "black", borderRadius: "10px", fontSize: "12px" }}
      >
        Submit
      </button>
    </form>
  );
};
