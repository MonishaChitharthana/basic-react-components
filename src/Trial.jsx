import React, { useState } from 'react'

const Trial = () => {

    // 1 Counting
    const [count,setCount] = useState(0)

    const increment = () => {
        // num is previous state value of count
        setCount(num => num+1)
    }

    const decrement = () => {
        setCount(num => num-1)
    }

    // Toggle Button
    const [toggleButton, setToggleButton] = useState(false)

    const changeToggle = () => {
        setToggleButton(flip => !flip)
    }

    // Name change as per user types
    const[name,setName] = useState('')

    const changeName = (e) => {
        // e.target.value gets the input box value, setName changes the name value
        setName(e.target.value)
    }

    const [show,setShow] = useState('')

    const showText = () => {
        setShow(text => 'Now you see me')
    } 

    const hideText = () => {
        setShow(text => '')
    }

    // Todo Add
    const [item,setItem] = useState('')

    const [items,setItems] = useState([])

    const addItem = () => {
        if(item.trim === '') return;

        setItems([...items,{text:item}])
        setItem('')
    }

    const deleteItems = (indexItem) => {
        const updateTasks= items.filter((_,index) => index!== indexItem)
        setItems(updateTasks)
    }

  return (
    <div>
        <p>hello</p>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <button onClick={changeToggle}>{toggleButton ? 'ON' : 'OFF'}</button>
    
        <input type="text" name="" id="" value={name} onChange={changeName}/>
        <p>The name is {name}</p>

        <p>{show}</p>
        <button onClick={showText}>Show</button>
        <button onClick={hideText}>Hide</button>

        <input type="text" name="" id="" value={item} onChange={(e) => setItem(e.target.value)}/>
        <p>{item}</p>
        <button onClick={addItem}>Add Task</button>
        <ul>
            {items.length > 0 
                ? (items.map((t, index) => (
                    <div>
                        <input type="checkbox" value={check} name="" id="" />
                        <li key={index}>{t}</li>
                        <button onClick={() => deleteItems(index)}>Delete</button>
                    </div>           
                )))
                : <p>No items</p>
            }
        </ul> 
    </div>
  )
}

export default Trial