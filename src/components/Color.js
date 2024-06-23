import React, { useState } from "react";
import randomColor from "randomcolor";

const Color = () => {
  const [color, setColor] = useState(null);
  const mouseover = () => {
    let c =  randomColor();
    setColor(c)
  };
  return (
    <div style={{
        backgroundColor: color,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       }} >
      Click to generate new color!
      <button onClick={mouseover}>Generate</button>
    </div>
  );
};

export default Color;
