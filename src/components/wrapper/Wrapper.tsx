import React from 'react'

import "./Wrapper.scss"

interface Props{
  children:React.ReactNode
  style?:object

}

const Wrapper: React.FC<Props> = ({children,style}) => {
  return (
    <section className={`container`} style={style}>
        {children}
    </section>
  )
}

export default Wrapper