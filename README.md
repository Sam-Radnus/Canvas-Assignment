# React Canvas Rectangle Dragging Project

This is a simple React project that demonstrates the creation of rectangles on a canvas, dragging them around, and displaying their coordinates.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)


## Features

- Create rectangles with random height, width, and background color.
- Rectangles are layered on top of each other.
- Drag rectangles within the canvas area.
- Highlight selected rectangle by clicking on it.
- Display the coordinates of rectangles.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/react-canvas-rectangle-dragging.git

2. Change directory to the project folder:

  ```
   cd react-canvas-rectangle-dragging
  ```
3. Install the dependencies:

  ```
  npm install
  ```
4. Start the development server:
  ```
  npm start
  ```
Open your browser and navigate to http://localhost:3000 to see the app in action.

Adding a Rectangle
You can add a button that creates a new rectangle with random properties:

```
<button className="btn" onClick={addRect}>Create Rectangle</button>

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

```



The button triggers the addRect function, which generates a new rectangle with random height, width, color, and position.
Dragging Rectangles
Enable dragging of selected rectangles by holding the mouse button and moving the cursor:

```
onMouseMove={handleMouseMove}
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
```
The onMouseDown event toggles the moving state when you click on a rectangle. The onMouseMove event calls the handleMouseMove function, which updates the position of the selected rectangle while dragging.
