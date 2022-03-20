import { Parallax, Background } from 'react-parallax';


export const LastImage = ({path , title}) => {
  const handlescroll =  ()=>{
    
    const section = document.querySelector( '#inicio' );
    section.scrollIntoView( { behavior: 'smooth', transitionDuration: ' 2s' } );
  }
    
  return (

    <Parallax  bgImageAlt="the cat" strength={620}>
      <Background className="custom-bg">
            <img  className='imgback' src={`${path}`} alt="fill murray" />
        </Background>
       <div className='contentLastAndFirst'>
            <h3 className='parallax__img-text firstAndLast'> - {title} -</h3>
            <div className='cajaScroll'>
                <span className='img-text-Scroll-garet' ><i className="fa-solid fa-angle-up"></i></span>
                 <p onClick={handlescroll}className='img-textScroll'> Volver al inicio </p>
            </div>
       </div>
    </Parallax>
        
  )
}
