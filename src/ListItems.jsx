import React,{useState} from 'react'
import Footer from './Footer'
import './ListItems.css'
import AddItems from './AddItems'

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

        const addItems = (item) => {
            const id = items.length ? items[items.length -1 ].id + 1 : 1
            const addNewItem = {id,checked : false,item}
            const listItems = [...items,addNewItem]
            setItems(listItems)
        }

        const [newItems,setNewItems] = useState('')

        function handleSubmit(e){
            e.preventDefault()
            console.log('submitted')
            if(!newItems) return
            console.log(newItems)
            addItems(newItems)
            setNewItems('')
        }
    
      return (
        <div className='todoList'>
            <AddItems 
                newItems = {newItems}
                setNewItems = {setNewItems}
                handleSubmit = {handleSubmit}
            />
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
            <Footer length={items.length}/>
        </div>
        
      )
}

export default ListItems