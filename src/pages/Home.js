import React from 'react';
import '../components/styles/FontStyles.css';
import './styles/AboutStyles.css';
// import Container from 'react-bootstrap/Container';
import Carousel from './Carousel'
// import Header from '../components/Header';
// import About from './About';
// import Contact from './Contact';
// import Navigation from '../components/Navigation';





export default function Home() {
    // const [currentPage, setCurrentPage] = useState('Home');
    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //         return <Carousel />;
    //     }
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Contact') {
    //         return <Contact />;
    //     }
    //     return <Carousel />;
    // }
    
    //     const handlePageChange = (page) => setCurrentPage(page);
        return (
            // <div>
            //     <Home currentPage={currentPage} handlePageChange={handlePageChange} />
            //     {renderPage()}
            // </div>
            <Carousel/>
        
       
            // <section>
            //     <Header/>
            //     {/* <Carousel/> */}
            //     <h2>{(currentPage)}</h2>
            //     <div>{renderPage()}</div>
            // </section>
            // <div>
            //     <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            //     {renderPage()}
            // </div>
    
        )
    };
   

