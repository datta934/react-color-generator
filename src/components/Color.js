import React, { useState } from "react";
import randomColor from "randomcolor";

const Color = () => {
  const [color, setColor] = useState(null);
  const mouseover = ({format}) => {
    const option = {
      format: format
    }
    let c =  randomColor(option);
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
      <button onClick={() => mouseover('hex')}>Generate HEX color</button>
      <button onClick={() => mouseover('rgb')}>Generate RGB</button>
      <button onClick={() => mouseover('hsl')}>Generate HSL</button>
    </div>
  );
};

export default Color;
