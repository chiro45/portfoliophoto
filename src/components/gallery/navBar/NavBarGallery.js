
export const NavBarGallery = () => {
  return (
    
      <div className='navBarContainer'>
  
      <div className='navBar__containerItems'>
  
        <div className='navBar__containerTitle'>
            <h2>LOGO</h2>
            <img src="https://images.vexels.com/media/users/3/141955/isolated/lists/d0f766bbe2603124417ed31d027b14c8-icono-de-camara-o-logotipo.png"/>
        </div>
  
        <div className='navBar__container-categories'>
            <ol className='navBar__orderList-categories'>
            <h2 className="navBar__title-socials">Categorias</h2>
                <ul className='navBar__itemList-categories'>Inicio <i className="fa-solid fa-house"></i></ul>               
                <ul className='navBar__itemList-categories'>Mis preferidas <i className="fa-solid fa-bookmark"></i></ul>    
                <ul className='navBar__itemList-categories'>Artisticas <i className="fa-solid fa-palette"></i></ul>         
                <ul className='navBar__itemList-categories'>Sessions <i className="fa-solid fa-camera-retro"></i></ul>      
                <ul className='navBar__itemList-categories'>Paquetes <i className="fa-solid fa-box-open"></i></ul>          
            </ol>
  
  
        </div>
  
  
        <div className='navBar__container-socials'>
         
             <ol className='navBar__orderList-social'>
             <div className="navBar__container__items">
            <h2 className="navBar__title-socials">Redes Sociales</h2>
                <ul className='navBar__itemList-social'>Instagram <i className="fa-brands fa-instagram-square"></i> </ul>
                <ul className='navBar__itemList-social'>facebook <i className="fa-brands fa-facebook-square"> </i></ul>
             </div>
            </ol>
            </div> 
      </div>

        
  
      </div>
    )
  }
  

