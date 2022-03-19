import React from 'react'
import { NavBarHome } from '../home/NavBarHome/NavBarHome'

export const Footer = () => {
  return (
    <section id='final'>
       
        <footer className="footerHome">
                <div className='footerLogo'>
                    <img className='footerImg' src='https://images.vexels.com/media/users/3/141955/isolated/lists/d0f766bbe2603124417ed31d027b14c8-icono-de-camara-o-logotipo.png'/>
                </div>
            <div className='descriptionFooter'>
            <h1 className='navBar__title-socials'></h1>
                <p>la descripcion seria como algo descriptivo es decir bien descriptoso pq asi son las cosas descriptivas</p>
            </div>


            <div className='listFooter__container'>
         
            <h2 className="navBar__title-socials">Redes Sociales</h2>
             <ol className='navBar__orderList-social'>
             
                <ul className='footer__itemList-social'> <i className="fa-brands fa-instagram-square"></i> </ul>
                <ul className='footer__itemList-social'> <i className="fa-brands fa-facebook-square"> </i> </ul>
                <ul className='footer__itemList-social'> <i className="fa-brands fa-whatsapp-square"></i> </ul>
             
            </ol>
            </div> 
                      
            
          
        </footer>
    </section>
  )
}
