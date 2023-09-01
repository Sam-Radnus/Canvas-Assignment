import React , {useState,useEffect}from 'react'
import "./../App.css";
import Rectangle from './Rectangle';
const Canva = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [show,setShow]=useState(false);
    const [selected,setSelected]=useState(-1);
    const [moving,setMoving]=useState(false);
    const [rects,setRects]=useState([]);
    const colors=["red","blue","green","violet","pink","cyan","magenta","darkgreen","orange","tomato"];
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    const rectSelected=(id)=>{
        console.log(id);
        setSelected((prev)=>{
          return prev===id?-1:id;
        });
    }
    useEffect(()=>{
      console.log(selected);
    },[selected])
    const addRect=()=>{
        const height=randomIntFromInterval(10,200);
        const width=randomIntFromInterval(10,200);
        const xCord=randomIntFromInterval(0,200);
        const yCord=randomIntFromInterval(0,150);
        const color=colors[randomIntFromInterval(0,colors.length)];
        const newRect={
            id:rects.length,
            height:height,
            width:width,
            color:color,
            x:xCord,
            y:yCord,
        }
        console.log(newRect);
        setRects((prevState)=>{
         const newState=[...prevState];
         newState.push(newRect);
         return newState;
        })
    
    }
    const handleMouseMove=(e)=>{
      if(!moving) return;
      if(selected===-1) return;
      const newRects = [...rects];
      setX(Math.max(0, Math.min(e.clientX - 170, 650-154-newRects[selected].width)));
      setY(Math.max(0, Math.min(e.clientY - 200, 442-146-newRects[selected].height)));
      //console.log(e.clientX);
      //console.log(e.clientY);
     
      //console.log(newRects[selected]);
      newRects[selected] = {
          ...newRects[selected],
          x: Math.max(0, Math.min(e.clientX - 170, 650-154-newRects[selected].width)),
          y: Math.max(0, Math.min(e.clientY - 200, 442-146-newRects[selected].height)),
      };
     // console.log(newRects[selected]);
      setRects(newRects);
    }
  return (

    <div className="container">
      <div className="btn-wrapper">
       <button className="btn" onClick={()=>{
        addRect();
       }} >Create Rectangle</button>
       <button className="btn" onClick={()=>{
        setShow((prev)=>{
          return !prev;
        })
       }}>{show?"hide":'show'} Position</button>
       </div>
       <div 
          onClick={(e)=>{
            console.log(e.target.className);
            if(e.target.className!=="rectangle"){
              setSelected(-1);
              setMoving(false);
            }
          }}
          onMouseMove={(e)=>{
            if(selected===-1){
              return ;
            }
            handleMouseMove(e);
          }}
           onMouseDown={(e)=>{
            setMoving((curr)=>{
                return !curr;
            });
            console.log(selected)

           }} 
          className="canvas">
    
          {rects.map((rect,index)=>{
            return <Rectangle id={index} show={show} rectSelected={rectSelected} selected={selected} height={rect.height} width={rect.width} color={rect.color} top={rect.y} left={rect.x}/>
          })}
       </div>
      {show && <div className="result">
        <ul>
       {  rects.map((rect,index)=>{
           return <li>

              <b style={{color:rect.color}}>Rectangle No:{rect.id}</b>
              <br/>
              <b>coordinates:({rect.x},{rect.y})</b>
          
            </li>
          })}
          </ul>
       </div> }
    </div>
  )
}

export default Canva