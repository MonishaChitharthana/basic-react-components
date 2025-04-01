import React, { useState } from 'react'

const SearchItems = ({searchItem,setSearchItem}) => {
  return (
    // on submit -> prevents the page from reloading when pressing any button
    <form action="" className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Search</label>
        <input type="text" name="" id="search" 
        role='searchbox' placeholder='Search Items'
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItems