import React, { useState, useEffect } from 'react';
import "./../App.css";
import Rectangle from './Rectangle';

const Canva = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [moving, setMoving] = useState(false);
    const [rects, setRects] = useState([]);
    const colors = ["red", "blue", "green", "violet", "pink", "cyan", "magenta", "darkgreen", "orange", "tomato"];

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const rectSelected = (id) => setSelected(prev => (prev === id ? -1 : id));

    const addRect = () => {
        const newRect = {
            id: rects.length,
            height: randomIntFromInterval(10, 200),
            width: randomIntFromInterval(10, 200),
            color: colors[randomIntFromInterval(0, colors.length-1)],
            x: randomIntFromInterval(0, 200),
            y: randomIntFromInterval(0, 150),
        };
        setRects(prevState => [...prevState, newRect]);
    };

    const handleMouseMove = (e) => {
        if (!moving || selected === -1) return;

        const newRects = [...rects];
        newRects[selected] = {
            ...newRects[selected],
            x: Math.max(0, Math.min(e.clientX - 170, 650 - 154 - newRects[selected].width)),
            y: Math.max(0, Math.min(e.clientY - 200, 442 - 146 - newRects[selected].height)),
        };
        setRects(newRects);
    };

    return (
        <div className="container">
            <div className="btn-wrapper">
                <button className="btn" onClick={addRect}>Create Rectangle</button>
                <button className="btn" onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "Show"} Position</button>
            </div>
            <div
                onClick={(e) => {
                    if (e.target.className !== "rectangle") {
                        setSelected(-1);
                        setMoving(false);
                    }
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setMoving(curr => !curr)}
                className="canvas">
                {rects.map((rect, index) => (
                    <Rectangle
                        key={index}
                        id={index}
                        show={show}
                        rectSelected={rectSelected}
                        selected={selected}
                        height={rect.height}
                        width={rect.width}
                        color={rect.color}
                        top={rect.y}
                        left={rect.x}
                    />
                ))}
            </div>
            {show && (
                <div className="result">
                    <ul>
                        {rects.map((rect, index) => (
                            <li key={index}>
                                <b style={{ color: rect.color }}>Rectangle No:{rect.id}</b>
                                <br />
                                <b>coordinates:({rect.x},{rect.y})</b>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Canva;
