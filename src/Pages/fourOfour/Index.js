import React from 'react';
import '../../App.scss';

import FourOFourImg from '../../assets/static/404.png';

const Index = () => {
    return (
        <div className="four_o_four">
            <img data-aos="fade-zoom" src={FourOFourImg} className="img-fluid" alt="..." />
            <h3 data-aos="fade-zoom">Back to home</h3>
        </div>
    );
};

export default Index;