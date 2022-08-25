import React from 'react'
import { Link } from 'react-router-dom';

import './Button.scss'

interface Props{
    text:string;
    dark:boolean;
    link?:string;
}

const Button: React.FC<Props> = ({text,dark,link}) => {

 
  return (
   <>
   {
    link 
    ? <Link to={link}>
        <button className={`btn ${dark ? 'btn-dark' : ''}`}>
          {text}
        </button>
      </Link>
    : <button className={`btn ${dark ? 'btn-dark' : ''}`}>
        {text}
      </button>
   }
   </>
   
  )
}

export default Button