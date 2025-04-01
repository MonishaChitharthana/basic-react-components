import React,{useRef} from 'react'

const AddItems = ({newItems ,setNewItems,handleSubmit}) => {

  // useRef -> i want to focus on text box after clicking submit
  const inputRef = useRef()

  return (
    <form style={{display:'flex'}} onSubmit={handleSubmit}>
        <p style={{marginRight:'10px'}}>Add Items : </p>
        <input ref={inputRef} style={{padding:'15px',borderRadius:'20px',border:'none'}} type="text" name="" id="AddItems" placeholder='Enter the item name'
            value={newItems}
            onChange={(e) => setNewItems(e.target.value)}
/>
{/* the current focus on the component which has the referal */}
        <button onClick={() => inputRef.current.focus()} type='Submit'>SUBMIT</button>
    </form>
  )
}

export default AddItems