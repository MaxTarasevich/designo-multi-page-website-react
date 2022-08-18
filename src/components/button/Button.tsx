import React from 'react'

import './Button.scss'

interface Props{
    text:string;
    dark:boolean;
}

const Button: React.FC<Props> = ({text,dark}) => {
  return (
    <button className={`btn ${dark ? 'btn-dark' : ''}`}>
        {text}
    </button>
  )
}

export default Button