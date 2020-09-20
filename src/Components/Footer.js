import React from 'react';
import './styles/footer.scss';
import {Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {socialFacebook, socialTwitter, socialYoutube} from 'react-icons-kit/typicons';
import {envelope} from 'react-icons-kit/fa/envelope';

import itVillageLogo from '../assets/static/it-village-logo.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 pr-lg-5 text-center text-lg-left">
                        <h4 className="mb-4">Our Partners</h4>
                        <div className="card border-0">
                            <div className="card-body partners">
                                <img src={itVillageLogo} className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 text-center text-lg-left">
                        <h4 className="mb-4">Need Help?</h4>
                        <Link to="/">support</Link>
                        <Link to="/help-line">helpline</Link>
                        <Link to="/privacy-policy">privacy & policy</Link>
                        <Link to="/terms-conditions">terms & conditions</Link>
                        <Link to="/who-we-are">Who we are ?</Link>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 text-center text-lg-left">
                        <h4 className="mb-4">Contacts</h4>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/elearners.live">
                                        <Icon icon={socialFacebook} size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/elearners.live">
                                        <Icon icon={socialYoutube} size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">
                                        <Icon icon={socialTwitter} size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:webmaster@example.com">
                                        <Icon icon={envelope} size={25} />
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <p className="flex-center copyright">All Rights Reserved 2020 © eLearners.live</p>
        </div>
    );
};

export default Footer;
