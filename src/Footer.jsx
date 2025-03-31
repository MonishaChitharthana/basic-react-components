import React from 'react'

const Footer = ({length}) => {
  return (
    <div style={
       {backgroundColor:"white",textAlign:'center',padding:'1px'}
    }>
        <p>{length} List {length==1 ? "Item" : "Items"}</p>
    </div>
  )
}

export default Footer