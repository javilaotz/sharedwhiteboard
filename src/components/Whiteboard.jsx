import React, {useRef, useEffect} from 'react'
import ReactDOM from "react-dom"
import json_response from "../mock/response.json"

const Whiteboard = (props) => {
    useEffect(() => {
        const context = canvas.current.getContext("2d");   
        plotGrid(context, size, cellSize);
        //plotCell(context, cellSize, {x:2, y:2})        
        context.stroke()
    });
    

    const size = 500, /* Area of whiteboard*/
          cellSize = 50,  /* Area of a cell */
          canvas = useRef(null),
          resp = json_response && json_response
    
          
    return (
        <div>
            <canvas ref={canvas} width={size} height={size} onClick={(e)=>trackClick(e, canvas, size, cellSize)}/>
        </div>
    );
}

const trackClick = (e, canvas, size, cellSize) => {
    console.log(e, "EVENTO")
    const pos = {
        x: e.clientX,
        y: e.clientY
      };
    console.log(pos, "pos")

    //calculating the cell clicked
    const cell = {
        x : 10*Math.floor((pos.x*cellSize)/size),
        y : 10*Math.floor((pos.y*cellSize)/size)
    }
    console.log(cell, "cell ~")

    //Plotting new points
    plotPoint(canvas, cellSize, cell)


}

const plotPoint = (canvas, cellSize, location) => {
    const x = location && location.x,
          y = location && location.y,
          ctx = canvas.current.getContext("2d")

    ctx.save()    
    ctx.fillStyle = "hsl(0, 0%, 0%)"
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fillRect(x, y, cellSize, cellSize)
}

const plotCell = (ctx, cellSize, location) => {
    const x = location && location.x,
          y = location && location.y
    ctx.save()    
    ctx.fillStyle = "hsl(0, 0%, 95%)"
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fillRect(x, y, cellSize, cellSize)
}

const plotGrid = (ctx, size, cellSize) => {
    const rowSize = size/cellSize
    const colSize = rowSize

    for (let x = 0; x < rowSize; x++) {
        for (let y = 0; y < colSize; y++) {
            plotCell(ctx, cellSize, {x:x*cellSize,y:y*cellSize})          
        }        
    }    
}

export default Whiteboard;