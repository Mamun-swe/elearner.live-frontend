import React from 'react';
import './styles/site-update.scss';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory, useParams} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SiteUpdateImg from "../assets/static/site_updateing.png";

toast.configure({autoClose: 2000})
const UpdateStatusForVisitors = () => {
    let {updateMassage} = useParams()
    const history = useHistory();

    const onSubmit = data => {
        history.push(`/`)
    };
    return (
        <div>
            <NavBar/>
            <div className="site-update" data-aos="fade-zoom">
                <div className="flex-center flex-column">
                    <div className="card shadow">
                        <img src={SiteUpdateImg} className="img-fluid" alt="..."/>
                        <h4 className="mb-2">Sorry,We are working on this feature</h4>
                        <p className="mb-5">{updateMassage}</p>
                        <form onSubmit={onSubmit}>

                            <button type="submit" className="btn btn-block shadow-none">Ohh!! Okay</button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default UpdateStatusForVisitors;
