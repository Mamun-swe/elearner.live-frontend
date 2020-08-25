import React, { useState, useEffect } from 'react';
import '../../Components/styles/team.scss';
import axios from 'axios';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

import RoniImg from '../../assets/team/roni.jpg';
import ShakilImg from '../../assets/team/shakil.jpg';
import MoonImg from '../../assets/team/moon.jpg';
import MamunImg from '../../assets/team/mamun.jpg';

const Index = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setMembers(result.data)
        }
        fetchMembers()
    }, [])
    return (
        <div className="team">
            <NavBar />

            <div className="header text-center">
                <h1 data-aos="zoom-in" className="mb-0">Meet Our Team</h1>
            </div>

            <div className="container">
                <div className="row">

                    {/* {members && members.length > 0 && members.map((member, i) => */}
                    <div className="col-12 col-sm-6 col-lg-4 team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={RoniImg} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">moniruzzaman roni</h5>
                                    <p className="mb-0 text-capitalize">back-end engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={ShakilImg} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">muhtasim shakil</h5>
                                    <p className="mb-0 text-capitalize">UI/UX engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={MamunImg} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">abdullah al mamun</h5>
                                    <p className="mb-0 text-capitalize">front-end engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={MoonImg} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">mahidul moon</h5>
                                    <p className="mb-0 text-capitalize">back-end engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* )} */}

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Index;