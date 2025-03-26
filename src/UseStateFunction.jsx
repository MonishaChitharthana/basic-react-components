import React, { useState } from 'react'

// hooks cannot be used under conditional statements
const UseStateFunction = () => {
  const [count,setCount] = useState(1);
  // called whenever another button is pressed , to overcome use arrow
  const [name,setName] = useState(()=>namee())

  function namee(){
    return console.log("This is a small function")
  }

  function incrementCount(){
    // Increemnts only one time when we do the same function 3 times
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  function decrementCount(){
    // Decrements three times when we do the same function
    setCount((prevcount) => {return prevcount-1})
    setCount((count) => {return count-1})
    setCount((count) => {return count-1})
  }

  function handleNameChange(){
    const names = ["Earn","Grow","Give"]
    const int = Math.floor(Math.random()*names.length)
    setMoney(names[int])
  }

  const[money,setMoney] = useState("Earn")

  return (
    <>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <p>Let's {money} the money</p>
      <button onClick={handleNameChange}>Subscribe</button>
    </>
  )
}

export default UseStateFunction