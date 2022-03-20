import { Parallax, Background } from 'react-parallax';


export const FirstImage = ({path , title}) => {
  const handlescroll =  ()=>{
   
    const section = document.querySelector( '#final' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
    
  return (

    <Parallax   strength={620}>
      <Background className="custom-bg">
            <img className='imgback' src={`${path}`} alt="fill murray" />
        </Background>
       <div className='contentLastAndFirst'>
            <h3 className='parallax__img-text firstAndLast'> - {title} -</h3>
            <div onClick={handlescroll} className='cajaScroll'>
                 <p  className='img-textScroll'> Scroll Down </p>
                <span className='img-text-Scroll-garet' ><i className="fa-solid fa-angle-down"></i></span>
            </div>
       </div>
    </Parallax>
        
  )
}
