import React, { useState } from 'react'

export const NavBarHome = () => {


  const [navBar, setNavBar] = useState(false);

const handleNav =()=>{
  setNavBar(!navBar)
  
}


  return (
    <div className='navBarContainer-parallax'>
  
      <div  className={(navBar) ?' navBar__containerItems-parallax active' : '  navBar__containerItems-parallax  ' }>
  
  
        <div className='navBar__container-categories-parallax noMobile'>
            <ol className='navBar__orderList-categories-parallax'>
                          <ul className='navBar__itemList-categories-parallax'> Inicio  <i className="fa-solid fa-house"></i></ul>               
                          <ul className='navBar__itemList-categories-parallax'> Proyectos  <i className="fa-solid fa-list-check"></i></ul>    
                          <ul className='navBar__itemList-categories-parallax'> Sobre mi  <i className="fa-solid fa-icons"></i> </ul>  
                          <ul> <div className='ul-img'> <img  src='https://images.vexels.com/media/users/3/141955/isolated/lists/d0f766bbe2603124417ed31d027b14c8-icono-de-camara-o-logotipo.png'/> </div></ul>       
                          <ul className='navBar__itemList-categories-parallax'> Contacto  <i className="fa-solid fa-paper-plane"></i></ul>      
                          <ul className='navBar__itemList-categories-parallax'> Galeria  <i className="fa-solid fa-photo-film"></i></ul>          
                          <ul className='navBar__itemList-categories-parallax'> Paquetes <i className="fa-solid fa-box-open"></i></ul>          
            </ol>
  
  
        </div> 
        <div className={(navBar) ?'mobile active' : ' mobile '}>
              <div className='caja-navBar'>
                <h4 className=' navBar__itemList-categories-parallax'>Stefano</h4>
                <h4 onClick={handleNav} className={(navBar) ?'nvBarTogglea active' : 'nvBarTogglea'}>{ ( !navBar) ? <i className="fa-solid fa-bars "></i> : <i className="fa-solid fa-xmark "></i>}</h4>
    
              </div>

               <div className={(navBar) ?'notHidden' : 'hidden'}>
                       <ol className='navBar__orderList-categories-parallax' >
                          <ul className='navBar__itemList-categories-parallax'> Inicio  <i className="fa-solid fa-house-chimney"></i></ul>               
                          <ul className='navBar__itemList-categories-parallax'> Proyectos  <i className="fa-solid fa-list-check"></i></ul>    
                          <ul className='navBar__itemList-categories-parallax'> Sobre mi  <i className="fa-solid fa-icons"></i> </ul>         
                          <ul className='navBar__itemList-categories-parallax'> Contacto  <i className="fa-solid fa-paper-plane"></i></ul>      
                          <ul className='navBar__itemList-categories-parallax'> Galeria  <i className="fa-solid fa-photo-film"></i></ul>   
                          <ul className='navBar__itemList-categories-parallax'> Paquetes <i className="fa-solid fa-box-open"></i></ul>   
                       </ol>
                </div>       
  
  
        </div>
  
  

      </div>

        
  
      </div>
  )
}
