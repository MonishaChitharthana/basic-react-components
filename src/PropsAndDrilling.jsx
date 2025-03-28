import React from 'react'

// Parent Component
const PropsAndDrilling = () => {
    return (
        <div>
            <TextProp title='Hello'/>
            {/* calls the default value */}
            <TextProp />
            <TextPropMany title = "hello"/>
        </div>
    )
}

// Child Components : TextProp and TextPropMany
// passing a destructured value
const TextProp = ( {title = "HelloWorld"} ) => {

  return (
    <div>{title}</div>
  )
}


// passing a props which is a object in React that contains data or attributes passed from a parent component to a child component
const TextPropMany = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default PropsAndDrilling