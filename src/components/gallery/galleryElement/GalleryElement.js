import { useState } from 'react';
import { arrImages } from '../../../helpers/listadoImgs';




export const GalleryElement = () => {
    const [open, setOpen] = useState(false);
    let [elementActive, setElementActive ]= useState(
        {
            src: null,
            text: null
        }
        )
    const handleClick = ({target})=>{
      const id = target.id;
       const result = arrImages.filter(e => e.src === id)
        const [ elementActive1] = result
         setElementActive(elementActive1)
         aca()
         console.log(elementActive)
    }
    const aca = () =>{
        setOpen(!open)
    }
    
    return (
    <div className='galleryElement__container'>
        <div className='container__elements'>
        {
            arrImages.map(
                ({src, text}, i)=> 
            (
            <div key={i} className='galleryElement__container-element'> 
                     <div className='gallery__picture'>
                        <h1 onClick={handleClick} id={src}className='text'>{text} {i+1}</h1> 
                         <img alt='foto'className='foto' src={src}/>
                     </div>   
            </div>
                
                )   
                )
                
            }
        
        </div>
    </div>
  )
  
}
