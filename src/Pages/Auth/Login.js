import React from 'react';
import '../../Components/styles/auth.scss';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import LoginImg from '../../assets/static/door_open.png';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="auth" data-aos="fade-zoom">
            <div className="flex-center flex-column">
                <div className="card shadow-sm">
                    <img src={LoginImg} className="img-fluid" alt="..." />
                    <h4>লগইন করুন</h4>
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

                        <div className="form-group mb-3 text-left">
                            {errors.password && errors.password.message ? (
                                <small className="text-danger">{errors.password && errors.password.message}</small>
                            ) : <small>পাসওয়ার্ড</small>
                            }

                            <input
                                type="password"
                                name="password"
                                className="form-control shadow-none"
                                placeholder="********"
                                ref={register({
                                    required: "পাসওয়ার্ড প্রয়োজন*",
                                })}
                            />
                        </div>

                        <button type="submit" className="btn btn-block shadow-none">লগইন করুন</button>
                        <br />

                        <Link to="/reset">পাসওয়ার্ড ভুলে গেছেন ?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;