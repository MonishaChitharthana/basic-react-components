import React, { useState } from 'react'

const BoxColorChange = () => {

    const [color,setColor] = useState('')
    const [hexa,setHexa] = useState('')
    const [textColor,setTextColor] = useState('black')

    const changeColor = () => {
        setTextColor((prevColor) => (prevColor == 'black' ? 'white' : 'black'))
    }
  return (
    <div>
        <div style={{
            width:'200px', 
            height:'200px',
            border:'1px solid black',
            backgroundColor:color,
            color:textColor,
            }}>
            {color.length > 0 ? <p>{color}</p> : <p>Empty</p>}
        </div>
        <input 
            type="text" 
            name="" 
            id="" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={changeColor}>Toggle color</button>
    </div>
  )
}

export default BoxColorChange