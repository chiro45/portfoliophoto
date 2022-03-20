import { Footer } from "../footer/Footer";

import { FirstImage } from "./imagenes/FIrstImage"
import { ImagesIntermediated } from "./imagenes/ImagesIntermediated"
import { LastImage } from "./imagenes/LastImage";

import {NavBarHome} from './NavBarHome/NavBarHome';
export const Home = () => {
  return (
    <div className="containerHome">
                <NavBarHome/>
        <div className="containnerParallax">
            <section id="inicio">
                <FirstImage  path={'https://drive.google.com/uc?export=view&id=1baGH9GAlC58Bh1VdtJepHxuekLJ3I1jB'} title={'por'}/>
            </section>
            <main>
                <ImagesIntermediated  path={'https://drive.google.com/uc?export=view&id=1Qp9qQT8gnCaiaRXFXKpITlknQsnnSmZ1'} title={'Stefano'}/>
                <ImagesIntermediated  path={'https://drive.google.com/uc?export=view&id=1ODCAPiHxNZkzWTk7yseaCSN5duAt-tnr'} title={'por'}/>
                <ImagesIntermediated path={'https://drive.google.com/uc?export=view&id=1k9DmRI9xlaQQfgsHuKZE7ieLG_sQBUHd'} title={'Ahi'}/>
                <ImagesIntermediated path={'https://drive.google.com/uc?export=view&id=1GQCl-3FzRKKRhFHw7nCSOx-vJKGZbJ-s'} title={'Pierina'}/>
                <ImagesIntermediated path={'https://drive.google.com/uc?export=view&id=1tjHEijgvrLPjqzAUQder14kMs6044XTz'} title={'Titulo'}/>
                <LastImage path={'https://drive.google.com/uc?export=view&id=1ftX-Iobik5wgs3h7RvotB77OcSPGph8N'} title={'Ahi'}/>
            </main>
        
         {/* https://drive.google.com/uc?export=view&id=1Qp9qQT8gnCaiaRXFXKpITlknQsnnSmZ1
           https://drive.google.com/file/d/1baGH9GAlC58Bh1VdtJepHxuekLJ3I1jB/view?usp=sharing
        */}
           
        </div>

          <footer>
                <Footer/> 
          </footer>
    </div>
  )
}
