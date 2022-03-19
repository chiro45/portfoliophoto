

import { Parallax, Background } from 'react-parallax';
import { TextBox } from '../textBox/TextBox';

export const ImagesIntermediated = ({path , title}) => {

    
  return (

    <Parallax  bgImageAlt="the cat" strength={620}>
      <Background className="custom-bg">
            <img  className='imgback' src={`${path}`} alt="fill murray" />
        </Background>
       <div className='content'>
            <h3 className='img-text'> - {title} -</h3>
       </div>
    </Parallax>
        
  )
}


