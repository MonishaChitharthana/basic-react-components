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
    
      return (
        <div>
            <ul>
                {items.map((item)=>(
                    <li key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>
                        <label>{item.item}</label>
                        <button>DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
      )
}

export default ListItems