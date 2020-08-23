import React from 'react';
import './styles/footer.scss';
import { Link } from 'react-router-dom';
// import { Icon } from 'react-icons-kit';
// import {socialFacebook, socialYoutube, socialTwitter} from 'react-icons-kit/typicons';

import itVillageLogo from '../assets/static/it-village-logo.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 pr-lg-5 text-center text-lg-left">
                        <h4 className="mb-4">Our Partners</h4>
                        <div className="card border-0">
                            <div className="card-body partners">
                                <img src={itVillageLogo} className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 text-center text-lg-left">
                        <h4 className="mb-4">Need Help?</h4>
                        <Link to="/">privacy</Link>
                        <Link to="/">policy</Link>
                        <Link to="/">support</Link>
                        <Link to="/">terms</Link>
                        <Link to="/">helpline</Link>
                    </div>
                    <div className="col-12 col-lg-2 mt-5 mt-lg-0 text-center text-lg-left">
                        <h4>Contacts</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;