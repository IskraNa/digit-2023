import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
    return(
        <div className="container">
            <div className="row m-5 text-center d-flex flex-column">
                <div className="m-5  w-50 mx-auto p-3  borderContact">
                    
                    <i className="bi bi-telephone fs-3 ms-auto"></i><span className="fs-5 m-3">+02 223 305</span>
                    
                </div>
                <div className='m-5  w-50 mx-auto p-3  borderContact'>
                <   i className="bi bi-envelope fs-3"></i><span className="fs-5 m-3">vkusodoma@gmail.com</span>
                </div>
                <div className='m-5  w-50 mx-auto p-3  borderContact'>
                    <i className="bi bi-pin-map fs-3"></i><span className="fs-5 m-3">Никола Тесла 9, Скопје, 1000</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;