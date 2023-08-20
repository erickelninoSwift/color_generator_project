import React from "react";
import { SingleColor } from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

export const ColorList = ({ myColors }) => {
  return (
    <section className="colors">
      {myColors.map((color, index) => {
        let id = uuidv4();
        return <SingleColor key={id} colors={color} index={index} />;
      })}
    </section>
  );
};
