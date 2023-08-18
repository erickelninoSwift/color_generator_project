import React from "react";
import { SingleColor } from "./SingleColor";

export const ColorList = ({ myColors }) => {
  return (
    <section className="colors">
      {myColors.map((color) => {
        return <SingleColor colors={color} />;
      })}
    </section>
  );
};
