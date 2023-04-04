import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../components/styles/FontStyles.css';
import './styles/AboutStyles.css';
// import Container from 'react-bootstrap/Container';
import Carousel from './Carousel'
// import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
// import Navigation from '../components/Navigation';





export default function Home() {
//     const [currentPage, setCurrentPage] = useState('Home');
//     const renderPage = () => {
//         if (currentPage === 'home') {
//             return <Carousel />;
//         }
//         if (currentPage === 'about') {
//             return <About />;
//         }
//         if (currentPage === 'contact') {
//             return <Contact />;
//         }
//         return <Carousel />;
//     }
    
//         const handlePageChange = (page) => setCurrentPage(page);
        return (
            <Router basename={process.env.PUBLIC_URL}>
            {/* <Header /> */}
            <Switch>
                <Route exact path='/' component={Carousel} />
                {/* <Route  path='/home' component={Carousel} /> */}
                <Route  path='/about' component={About}/>
                <Route eact path='/contact' component={Contact} />
            </Switch>
        </Router>
    //         <Router>
      
    //   <Switch>
    //     <Route exact path='/' element={Carousel} />
    //     <Route exact path='/home' element={Carousel} />
    //     <Route exact path='/about' element={About}/>
    //     <Route exact path='/contact' element={Contact} />
    //   </Switch>
      

    // </Router>
            // <div>
            //     <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            //     {renderPage()}
            // </div>
            // <Carousel/>
        
       
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
   

