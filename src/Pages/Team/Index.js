import React from 'react';
import '../../Components/styles/team.scss';

import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Index = () => {
    return (
        <div className="team">
            <NavBar />

            <div className="header text-center">
                <h1 data-aos="zoom-in" className="mb-0">Meet Our Team</h1>
            </div>

            <Footer />
        </div>
    );
};

export default Index;