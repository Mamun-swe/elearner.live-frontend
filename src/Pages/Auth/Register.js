import React from 'react';
import '../../Components/styles/auth.scss';
import { useForm } from "react-hook-form";
import RegImg from '../../assets/static/register_img.png';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="auth" data-aos="fade-zoom">
            <div className="flex-center flex-column">
                <div className="card shadow-sm mt-lg-5">
                    <h4>ফ্রি একাউন্ট খুলুন</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group mb-3 text-left">
                            {errors.name && errors.name.message ? (
                                <small className="text-danger">{errors.name && errors.name.message}</small>
                            ) : <small>আপনার নাম</small>
                            }

                            <input
                                type="text"
                                name="name"
                                className="form-control shadow-none"
                                placeholder="Abdullah Al Mamun"
                                ref={register({
                                    required: "আপনার নাম প্রয়োজন*"
                                })}
                            />
                        </div>


                        <div className="form-group mb-3 text-left">
                            {errors.phone && errors.phone.message ? (
                                <small className="text-danger">{errors.phone && errors.phone.message}</small>
                            ) : <small>আপনার মোবাইল নম্বর</small>
                            }

                            <input
                                type="text"
                                name="phone"
                                className="form-control shadow-none"
                                placeholder="017xxxxxxxx"
                                ref={register({
                                    required: "আপনার মোবাইল নম্বর প্রয়োজন*",
                                    pattern: {
                                        value: /^(?:\+88|88)?(01[3-9]\d{8})$/i,
                                        message: "মোবাইল নম্বর সঠিক নয়*"
                                    }
                                })}
                            />
                        </div>


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

                        <button type="submit" className="btn btn-block shadow-none">জয়েন করুন</button>
                    </form>

                    <img src={RegImg} data-aos="fade-right" className="img-fluid reg-img d-none d-lg-block" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Register;