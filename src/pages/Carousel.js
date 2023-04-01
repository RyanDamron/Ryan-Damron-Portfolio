import React, {useState} from 'react';
import './styles/CarouselStyles.css';
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
// import '../../src/images';
// import imgOne from '../components/austria.jpg';

// import Navigation from './Navigation'

const Project = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (

        <Carousel className='google-font-1' fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <a href='https://us-opencourts.herokuapp.com/' target="_blank" rel="noreferrer"><img
          className="d-block w-100 rounded"
          src={require('../images/open-courts.png')}
          alt="First slide"
        /></a>
        <Carousel.Caption className="border rounded carousel-caption">
          <h3>US OpenCourts</h3>
          <p>A collaborative app designed to allow users to search for Tennis Courts around the US.</p>
          <a href='https://github.com/RyanDamron/US-OpenCourts' className='github-link' target="_blank" rel="noreferrer">GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://ryandamron.github.io/Weather-Voyage/' target="_blank" rel="noreferrer"><img
          className="d-block w-100 rounded"
          src={require('../images/weather-voyage.png')}
          alt="Second slide"
        /></a>

        <Carousel.Caption className="border rounded carousel-caption">
          <h3>Weather Voyage</h3>
          <p>An early app using HTML, CSS, Bootstrap, and JavaScript. It was good experience learning to make API calls.</p>
          <a href='https://github.com/RyanDamron/Weather-Voyage' className='github-link' target="_blank" rel="noreferrer">GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='https://crothos.github.io/flashcard-app/' target="_blank" rel="noreferrer"><img
          className="d-block w-100 rounded"
          src={require('../images/flash-facts.png')}
          alt="Third slide"
        /></a>
        
        <Carousel.Caption className="border rounded carousel-caption">
          <h3>FlashFacts</h3>
          <p>
            Fun group project using HTML, CSS, and JavaScript. Create custom flash cards, or use pre-made cards.
          </p>
          <a href='https://github.com/Crothos/flashcard-app' className='github-link' target="_blank" rel="noreferrer">GitHub</a>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      <a href='https://text-editor-plus.herokuapp.com//' target="_blank" rel="noreferrer"><img
          className="d-block w-100 rounded"
          src={require('../images/text-editor.png')}
          alt="Third slide"
        /></a>
        
        <Carousel.Caption className="border rounded carousel-caption">
          <h3>Just Another Text Editor</h3>
          <p>
            A nifty little text editor that can be installed and used offline.
          </p>
          <a href='https://github.com/RyanDamron/Text-Editor' className='github-link' target="_blank" rel="noreferrer">GitHub</a>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      <a href='https://github.com/RyanDamron/Social-Network-API' target="_blank" rel="noreferrer"><img
          className="d-block w-100 rounded"
          src={require('../images/social-network.png')}
          alt="Third slide"
        /></a>
        
        <Carousel.Caption className="border rounded carousel-caption">
          <h3>Social Network API</h3>
          <p>
            Back end of a Social Network built using Express and MongoDB.
          </p>
          <a href='https://github.com/RyanDamron/Social-Network-API' className='github-link' target="_blank" rel="noreferrer">GitHub</a>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
        // <div className='container' id="carousel">
        //     <p className='fs-1 text-center'>My Projects</p>
        //     <div id="carouselExampleCaptions" className="carousel slide">
        //         <div className="carousel-indicators">
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         </div>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img src={require('../images/austria.jpg')} className="d-block w-100 rounded" alt="..."></img>
        //                 <div className="carousel-caption d-none d-md-block">
        //                     <h5>First slide label</h5>
        //                     <p>Some representative placeholder content for the first slide.</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={require('../images/cat.jpg')} className="d-block w-100 rounded" alt="..."></img>
        //                 <div className="carousel-caption d-none d-md-block">
        //                     <h5>Second slide label</h5>
        //                     <p>Some representative placeholder content for the second slide.</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={require('../images/desert.jpg')} clasName="d-block w-100 rounded" alt="..."></img>
        //                 <div className="carousel-caption d-none d-md-block">
        //                     <h5>Third slide label</h5>
        //                     <p>Some representative placeholder content for the third slide.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>
    )
};

export default Project;