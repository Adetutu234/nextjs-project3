import React from 'react'

type ButtonProps = {
    text: string,
    className: string,
    onClick?: ()=> void
    icon?: React.ReactNode
}
const Button = ({text,className,onClick, icon }:ButtonProps) => {
  return (
    <div className={className} onClick={onClick} >
      {text}
      {icon}
    </div>
  )
}

export default Button
