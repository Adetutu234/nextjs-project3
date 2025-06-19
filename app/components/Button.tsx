import React from 'react'

type ButtonProps = {
    text: string,
    className: string,
    onClick?: ()=> void
}
const Button = ({text,className,onClick}:ButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
