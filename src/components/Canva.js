import React , {useState,useEffect}from 'react'
import "./../App.css";
const Canva = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [moving,setMoving]=useState(false);
    const [rects,setRects]=useState([]);
    const colors=["red","blue","green","black","pink"];
  return (
    <div className="container">
       <button>Create Rectangle</button>
       <button>Show Position</button>
       <div 
         
          onMouseMove={(e)=>{
            if(!moving) return;
           // console.log(e.clientX);
           // console.log(e.clientY);
            setX(e.clientX-150);
            setY(e.clientY-200);
          }}
           onMouseDown={(e)=>{
            e.preventDefault();
            setMoving((curr)=>{
                return !curr;
            });
           // console.log("Mouse:"+e.clientY-150);
           // console.log("Mouse:"+e.clientY-200);
            setX(Math.max(0,Math.min(e.clientX-170,370)));
            setY(Math.max(0,Math.min(e.clientY-200,200)));
          
           }} 
       className="canvas">
          <div className="rectangle"
            style={{top:y+'px',left:x+'px'}}
          >
          
          </div>
          {rects.map((rect)=>{
            return <div className="rectangle"
            style={{top:rect.y+'px',left:rect.x+'px'}}
          >
          
          </div>
          })}
       </div>
    </div>
  )
}

export default Canva