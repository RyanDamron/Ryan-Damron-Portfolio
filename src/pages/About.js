import React from 'react';
import '../components/styles/FontStyles.css';
import './styles/AboutStyles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    console.log('The about page')
    return (
        <div className='p-3 google-font-1 rounded' id='about-me'>
            <div>

                <h3 id='about-me-title'>About Me</h3>
                <Row>
                    <Col sm={4}>

                        <img src={require('../images/ryan-professional.jpg')} id='ryan-prof' alt=''></img>
                    </Col>
                    <Col sm={8}>
                        <p>
                            I love to create, and am always looking for ways to improve the things I've created. From writing songs, to building Lego creations with my kids, to building full-stack apps, I am always excited to build something that I can enjoy with others. This is why I have completely fallen in love with web development. From the time my first "Hello World" appeared on the screen, I knew this was going to be something I could pour myself into.
                            <br></br>
                            <br></br>
                            With a background as a public school teacher, I have switched career paths into web development. I officially graduated from a Full-Stack Web Development Bootcamp at the University of Texas at Austin in March of 2023, and I'm excited to join a team and create beautiful applications.
                            <br></br>
                            <br></br>
                        </p>
                    </Col>
                </Row>
            </div>
            <Row >
                <Col md={4}>
                    <div id='skills-div'>
                        <h4 id='skills-title'>My Skills</h4>
                        <ul className='tool-tip' id='skills-ul'>
                            <li>
                                <img src={require('../images/JS-icon.png')} alt='' id='js-icon' title='JavaScript'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/html-icon.png')} alt='' id='html-icon' title='HTML5'>

                                </img>
                            </li>
                            <li>
                                <img src={require('../images/css-icon.png')} alt='' id='css-icon' title='CSS3'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/react-icon.png')} alt='' id='react-icon' title='React.js'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/sql-icon.png')} alt='' id='sql-icon' title='SQL'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/express-icon.png')} alt='' id='express-icon' title='Express'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/nodejs-icon.png')} alt='' id='nodejs-icon' title='Node.js'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/mongodb-icon.png')} alt='' id='mongodb-icon' title='MongoDB'>
                                </img>
                            </li>
                        </ul>

                    </div>
                </Col>
                <Col md={{ span: 4, offset: 3 }}>
                    <div id='not-coding'>
                        <h4 id='not-coding-title'>My Non-Coding Interests</h4>
                        <ul className='tool-tip' id='not-coding-ul'>
                            <li>
                                <img src={require('../images/guitar-icon.png')} alt='' title='Playing Guitar'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/banjo-icon.png')} alt='' title='Playing Banjo'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/country-icon.png')} alt='' title='Country Music'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/bball-icon.png')} alt='' title='Basketball'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/run-icon.png')} alt='' title='Running'>
                                </img>
                            </li>
                            <li>
                                <img src={require('../images/books-icon.png')} alt='' title='Reading'>
                                </img>
                            </li>


                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About;