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
    ? <Link to={link} className={`btn ${dark ? 'btn-dark' : ''}`}>
          {text}
        
      </Link>
    : <button className={`btn ${dark ? 'btn-dark' : ''}`}>
        {text}
      </button>
   }
   </>
   
  )
}

export default Button