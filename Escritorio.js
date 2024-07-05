import React from 'react';
import "./PagesCss/Escritorio.css"



import "./PagesCss/Escritorio.css"
import Cadastro from '../component/Cadastro';
import AreasHome from '../component/AreasHome';
import CarouselComponent from '../component/Carousel';


function Escritorio() {

  
  const homeCarousel = [

    { 
      src: '/assets/Video/Sede.mp4', showControls: false,

    },
    { 
      src: '/assets/Video/AreasAtuacao.mp4', showControls: false,

    }


  ];


 return (
    <React.StrictMode>
      
        <CarouselComponent videos={homeCarousel} />
        <div id="bread-crumb"></div>
        <div className="div-home">
        </div>
        <AreasHome />
   <Cadastro />
   <section id="rankings">
            <div className="trabalhe-container">
              <div className="trabalhe-row">
                <div className="trabalhe-col-12 trabalhe-tab">
                  <div className="row box no-gutters">
                    <div className="col-lg-3 align-self-center">
                      <h4>Política restritiva sobre rankings</h4>
                    </div>
                    <div className="trabalhe-col-lg-9 text">
                      Não participamos de ou damos informações a publicações classificadoras de escritórios de advocacia (rankings) com uso de informações confidenciais de clientes. Também não pagamos por espaço editorial ou publicitário. Isso pode levar a omissão ou distorção de informações relativas a nossas atividades em tais publicações. Assim, a visita a nosso site é a maneira mais adequada de conhecer nossas atividades.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    </React.StrictMode>
  );
}

export default Escritorio;