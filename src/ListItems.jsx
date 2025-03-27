import React,{useState} from 'react'

const ListItems = () => {
    // Initializing a List (Array) of Objects
        const [items,setItems] = useState([
            {
                id:1,
                checked:true,
                item:"Coding"
            },
            {
                id:2,
                checked:true,
                item:"Playing"
            },
            {
                id:3,
                checked:false,
                item:"Register"
            }
        ])

        function handleCheck(id){
            const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
            setItems(listItems)
        }

        function handleDelete(id){
            const listItems = items.filter((item) => item.id !== id)
            setItems(listItems)
        }
    
      return (
        <div>
            {items.length > 0 ? (
                <ul>
                    {items.map((item)=>(
                        <li key={item.id}>
                            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>
                            <label style={(item.checked) ? {textDecoration : 'line-through'} : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                            <button onClick={() => handleDelete(item.id)}>DELETE</button>
                        </li>
                    ))}
                </ul>
            ) : 
            (
                <p>Your List is Empty</p>
            )
            }
        </div>
      )
}

export default ListItems