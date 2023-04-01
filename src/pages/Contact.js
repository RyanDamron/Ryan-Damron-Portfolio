import React, { useState, useRef } from 'react';
import '../components/styles/FontStyles.css';
import './styles/ContactStyles.css';
import { Modal, Button } from 'react-bootstrap';

function Contact() {
    const btnRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    function handleCopyEmail() {
        const emailLink = document.getElementById('email-link');

        const tempInput = document.createElement('input');
        tempInput.setAttribute('type', 'text');
        tempInput.setAttribute('value', emailLink.textContent);

        document.body.appendChild(tempInput);
        tempInput.select();

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        btnRef.current.innerText = 'Email copied!';
    }
    return (
        <div className='p-3 google-font-1 rounded' id="contact-me">
            <div id='icons'>
                <h3 id='contact-me-title'>Contact Me</h3>
                <div>
                    <p>
                        I look forward to hearing from you. Feel free to connect with me on LinkedIn, GitHub, or shoot me an email.
                    </p>
                </div>
                <div className='d-flex justify-content-around'>
                    <a href='https://www.linkedin.com/in/ryan-damron-b906b178/' target="_blank" rel="noreferrer">
                        <img src={require('../images/linkedin-logo.png')} alt=''></img>
                    </a>
                    <a href='https://github.com/RyanDamron' target="_blank" rel="noreferrer">
                        <img src={require('../images/github-logo.png')} alt=''></img>
                    </a>
                    <Button variant="link" onClick={handleShow}>
                        <img src={require('../images/gmail-icon.png')} alt='' id="mail-icon"></img>
                    </Button>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className='google-font-1'>Email Me</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className='text-center google-font-1' ><a href="mailto:ryandamron@gmail.com" id="email-link">RyanDDamron@gmail.com</a></p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" className='google-font-1' id='copy-btn' ref={btnRef} onClick={handleCopyEmail}>
                                Copy Email
                            </Button>
                            <Button variant="secondary" className='google-font-1' onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Contact;