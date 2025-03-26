import React, { useState } from 'react'

const ArrayListsAndKeys = () => {

    // initializing a array 
    const num = [-2,-1,0,1,2]
    // mapping as key value pairs
    const number = num.filter(n=> n>=0).map(n => ({number:n}))
    console.log(number)

    return(
        <div>View Console</div>
    )
}

export default ArrayListsAndKeys