import React from 'react'

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
  return (
    <div>
        <button onClick={handleName}>CLICK LOAD</button>
        <button onClick={handleNameTwo()}>AUTO LOAD</button>
        <button onClick={()=>handleNameClick("jenny")}>CLICK LOAD WITH PARAMETER</button>
    </div>
  )
}

export default AnonymousFunction