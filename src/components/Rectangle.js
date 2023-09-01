import React from 'react';
import "./../App.css"
const Rectangle = ({ selected,id,show, height, width, top, left, color, rectSelected }) => {
  return (
    <div>
      <div
      className='rectangle'
        onClick={() => {
          rectSelected(id);
        }}
        style={{
          position: "absolute",
          border:`${selected===id?'solid':'dotted'}`,
          height: height,
          width: width,
          top: top + 'px',
          left: left + 'px',
          backgroundColor: color,
          zIndex:`${selected===id?'999':'50'}`,
        }}
      >
       {show?id:''}

      </div>
    </div>
  )
}

export default Rectangle;
