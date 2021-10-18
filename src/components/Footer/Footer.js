import React from 'react';
import logo from '../../images/logo.jpg'

const Footer = () => {
    return (
        <div className="mx-auto bg-dark text-center p-1 shadow-lg">
            <img className="img-fluid w-25 h-25" src={logo} alt="" />
            <div>
                <i className="fab fa-facebook mx-4 text-info"></i><i className="fab fa-instagram mx-4 text-info"></i><i className="fab fa-twitter mx-4 text-info"></i>
            </div>
            <p className="text-info">nhmunna@2021</p>
        </div>
    );
};

export default Footer;