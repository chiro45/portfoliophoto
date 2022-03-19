import React from 'react'

export const Modal = ({open}, src) => {
  console.log(src)
  return (

      (open) &&
            <div className='modal__container'>

           <img src= {`${src}`}/>
            </div>
  )
}
