import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
    return(
        <div className="container">
            <div className="row m-5 text-center d-flex flex-column">
                <div className="m-5  w-50 mx-auto p-3  borderContact">
                    <div><i className="bi bi-telephone fs-3 ms-auto"></i></div>
                    <div className="fs-5 m-3">+02 223 305</div>
                </div>
                <div className='m-5  w-50 mx-auto p-3  borderContact'>
                    <div><i className="bi bi-envelope fs-3"></i></div>
                    <div className="fs-5 m-3">vkusodoma@gmail.com</div>
                </div>
                <div className='m-5  w-50 mx-auto p-3  borderContact'>
                    <div><i className="bi bi-pin-map fs-3"></i></div>
                    <div className="fs-5 m-3">Никола Тесла 9, Скопје, 1000</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;