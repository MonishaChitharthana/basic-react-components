import React from 'react'
import './AnonymousFunction.css'

const AnonymousFunction = () => {
    const handleName = () =>{
        console.log("Thanks for clicking")
    }
    const handleNameTwo = () => {
        console.log("Thanks")
    }
    const handleNameClick = (name) => {
        console.log(`Thanks ${name}`)
    }
    const handleClick = (e) =>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }
  return (
    <div>
        <button onClick={handleName}>CLICK LOAD</button>
        <button onClick={handleNameTwo()}>AUTO LOAD</button>
        <button onClick={()=>handleNameClick("jenny")}>CLICK LOAD WITH PARAMETER</button>
        <button onClick={handleClick}>GET EVENT</button>
    </div>
  )
}

export default AnonymousFunction