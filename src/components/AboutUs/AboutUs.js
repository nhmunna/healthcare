import React from 'react';

const AboutUs = () => {
    return (
        <div id="about" className="container text-danger bg-light">
            <h2>Healthcare.com</h2>
            <p>We are the most trusted <b>DIAGNOSTIC CENTER</b> in your town. We provide best treatment with low cost. Our motto is <b>"YOUR RESPONSIBILITY IS OUR."</b></p>
            <p>Address:</p>
            <p>1123,xyz street, BanglaBazar.</p>
            <p>Mobile: +88018XXXXXX</p>
            <p>You can see our social platform to know more better.</p>
            <div>
                <i className="fab fa-facebook p-1 text-danger"></i><i className="fab fa-instagram p-1 text-danger"></i><i className="fab fa-twitter p-1 text-danger"></i>
            </div>
        </div>
    );
};

export default AboutUs;