import React from 'react';
import '../../Components/styles/auth.scss';
import { useForm } from "react-hook-form";
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

import ForgotImg from '../../assets/static/forgot.png';

const Reset = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <NavBar />
            <div className="auth" data-aos="fade-zoom">
                <div className="flex-center flex-column">
                    <div className="card shadow-sm">
                        <img src={ForgotImg} className="img-fluid" alt="..." />
                        <h4 className="mb-2">পাসওয়ার্ড ভুলে গেছেন ?</h4>
                        <p className="mb-5">শুধু আপনার একাউন্টের ই-মেইল টি দেন !</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3 text-left">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>ই-মেইল</small>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="example@gmail.com"
                                    ref={register({
                                        required: "ই-মেইল প্রয়োজন*",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "ই-মেইল সঠিক নয়*"
                                        }
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">সাবমিট করুন</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Reset;