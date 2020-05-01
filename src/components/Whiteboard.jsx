import React, {useRef, useEffect, useState} from 'react'
import json_response from "../mock/response.json"

const Whiteboard = (props) => {

    useEffect(() => {
        const me        = json_response && json_response.me,
              users   = json_response && json_response.users,
              color     = me && me.color
              
        plotUsers(users)
        line = {width: me.width, color: `rgb(${color.r}, ${color.g}, ${color.b})`}
    },)

    const plotUsers = (strokes) => {
        const context = canvas.current.getContext("2d")
        strokes.map(stroke => {
            const strokes  = stroke && stroke.strokes,
                  color    = stroke && stroke.color

            line = {width: stroke.width, color: `rgb(${color.r}, ${color.g}, ${color.b})`}
            strokes.map(point => {
                context.fillStyle = line.color 
                context.fillRect(point.x,point.y,line.width,line.width)
            })
        })
    }

    const [isMouseDown, setIsMouseDown] = useState(false);
    let pos     = {x :0, y:0},
        line    = {}    
    
    const size = 500, /* Area of whiteboard*/
          canvas = useRef(null)
    
    const startDrawing = (e, pos) => {
        setIsMouseDown(true)
        pos.x = e.clientX
        pos.y = e.clientY
    }

    const finishDrawing = () => {
        setIsMouseDown(false)
    }

    const drawLine = (e, canvas, pos, line) => {
        const context = canvas.current.getContext("2d")
        if(isMouseDown){
            const newPos = {x : e.clientX, y : e.clientY}    

            context.beginPath()
            pos.x && pos.x !== 0 && pos.y && pos.y !== 0 && context.moveTo( pos.x, pos.y ) 
            context.lineTo( newPos.x, newPos.y )
            context.lineWidth = line.width
            context.strokeStyle = line.color
            pos.x = newPos.x
            pos.y = newPos.y
        }
        context.stroke()
    }
          
    return (
        <div>
            <canvas 
                className='canvas'
                ref={canvas} 
                width={size} 
                height={size} 
                onMouseMove={(e)=>drawLine(e, canvas, pos, line)} 
                onMouseDown={(e)=>startDrawing(e, pos)} 
                onMouseUp={()=>finishDrawing(pos)}
            />
        </div>
    );
}

export default Whiteboard;