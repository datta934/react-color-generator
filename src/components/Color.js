import React, { useState } from "react";
import randomColor from "randomcolor";

const Color = () => {
  const [color, setColor] = useState(null);
  const mouseover = () => {
    let c =  randomColor(); console.log(c)
    setColor(c)
    alert(color);
  };
  return (
    <div style={{
        backgroundColor: color
       }} >
      Click to generate new color!
      <button onClick={mouseover}>Generate</button>
    </div>
  );
};

export default Color;
