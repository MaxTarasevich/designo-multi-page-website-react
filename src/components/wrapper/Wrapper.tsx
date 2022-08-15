import React from 'react'

import "./Wrapper.scss"

interface Props{
  children:React.ReactNode;
}

const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default Wrapper