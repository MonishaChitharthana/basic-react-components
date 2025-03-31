import React from 'react'

const AddItems = ({newItems ,setNewItems,handleSubmit}) => {

  return (
    <form style={{display:'flex'}} onSubmit={handleSubmit}>
        <p style={{marginRight:'10px'}}>Add Items : </p>
        <input style={{padding:'15px',borderRadius:'20px',border:'none'}} type="text" name="" id="AddItems" placeholder='Enter the item name'
            value={newItems}
            onChange={(e) => setNewItems(e.target.value)}
/>
        <button type='Submit'>SUBMIT</button>
    </form>
  )
}

export default AddItems