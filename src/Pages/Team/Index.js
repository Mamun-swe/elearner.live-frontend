import React, { useState, useEffect } from 'react';
import '../../Components/styles/team.scss';
import axios from 'axios';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

import RoniImg from '../../assets/team/roni.jpg';
import AshikImg from '../../assets/team/ashik.jpg';
import ShakilImg from '../../assets/team/shakil.jpg';
import MamunImg from '../../assets/team/mamun.jpg';

import Kaium from '../../assets/team/kaium.jpg';
import Hira from '../../assets/team/hira.jpg';
import Moon from '../../assets/team/moon.jpg';
import Tanvir from '../../assets/team/tanvir.jpg';

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

            <div className="container pt-5">
                <div className="row">

                    <div className="col-12 team-column text-center">

                        <div className="cheif-box">
                            <div className="card team-card cheif-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={RoniImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="mb-0 text-capitalize">moniruzzaman roni</h5>
                                        <p className="mb-0 text-capitalize">Founder</p>
                                        <p className="website">eLearners.live</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card team-card cheif-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={AshikImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="mb-0 text-capitalize">Ashikur Rahman Nishad</h5>
                                        <p className="mb-0 text-capitalize">Co-Founder</p>
                                        <p className="website">eLearners.live</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Core Team */}
            <div className="header text-center">
                <h1 className="mb-0">Meet Our Core Team</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center team-column">
                        <div className="team-box">
                            <div className="card team-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={MamunImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="mb-0 text-capitalize">abdullah al mamun</h5>
                                        <p className="mb-0 text-capitalize">frontend engineer</p>
                                        <p className="website">eLearners.live</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card team-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={RoniImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="mb-0 text-capitalize">moniruzzaman roni</h5>
                                        <p className="mb-0 text-capitalize">backend engineer</p>
                                        <p className="website">eLearners.live</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card team-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={ShakilImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="mb-0 text-capitalize">muhtasim shakil</h5>
                                        <p className="mb-0 text-capitalize">UI/UX engineer</p>
                                        <p className="website">eLearners.live</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Instructors */}
            <div className="header text-center">
                <h1 className="mb-0">Our Instructors</h1>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-sm-3 m-auto text-center team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={Tanvir} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">Tanvir Niloy</h5>
                                    <p className="mb-0 text-capitalize">instructor</p>
                                    <p className="website">eLearners.live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-sm-3 m-auto text-center team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={Kaium} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">Farhan Ahmed Kaioum</h5>
                                    <p className="mb-0 text-capitalize">instructor</p>
                                    <p className="website">eLearners.live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-sm-3 m-auto text-center team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={Moon} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">mahidul islam moon</h5>
                                    <p className="mb-0 text-capitalize">instructor</p>
                                    <p className="website">eLearners.live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-sm-3 m-auto text-center team-column">
                        <div className="card team-card">
                            <div className="card-body">
                                <div className="img-box rounded-circle">
                                    <img src={Hira} className="img-fluid" alt="..." />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="mb-0 text-capitalize">Hasibul Haque Hira</h5>
                                    <p className="mb-0 text-capitalize">instructor</p>
                                    <p className="website">eLearners.live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 text-center text-lg-right">
                        <h5 className="load-more">More...</h5>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Index;