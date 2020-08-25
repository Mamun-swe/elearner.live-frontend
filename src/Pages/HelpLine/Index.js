import React from 'react';
import '../../Components/styles/help-line.scss';
import { useForm } from "react-hook-form";


import ManTypingImg from '../../assets/static/man_typing_message.png';
import TextBoxImg1 from '../../assets/static/text_box_1.png';
import TextBoxImg2 from '../../assets/static/text_box_2.png';
import TextBoxImg3 from '../../assets/static/text_box_3.png';

const Index = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="help-line">

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 p-3 d-none d-lg-block text-center">
                            <h1 data-aos="zoom-in">Need Help ?</h1>
                        </div>
                        <div className="col-12 col-md-10 col-lg-7 m-auto img-column">
                            <div className="images">
                                <img
                                    src={TextBoxImg1}
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    className="img-fluid text-box-img-1"
                                    alt="..."
                                />
                                <img
                                    src={TextBoxImg2}
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                    className="img-fluid text-box-img-2"
                                    alt="..."
                                />
                                <img
                                    src={TextBoxImg3}
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className="img-fluid text-box-img-3"
                                    alt="..."
                                />
                                <img
                                    src={ManTypingImg}
                                    data-aos="fade-left"
                                    data-aos-easing="ease-in-sine"
                                    className="img-fluid typing-mobile-img"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-12 p-3 d-lg-none text-center">
                            <h1 data-aos="zoom-in">Need Help ?</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form py-4 py-lg-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    {/* Name */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            {errors.name && errors.name.message ? (
                                                <small className="text-danger">{errors.name && errors.name.message}</small>
                                            ) : <small>Name</small>
                                            }
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control shadow-none"
                                                placeholder="Your name"
                                                ref={register({
                                                    minLength: {
                                                        value: 5,
                                                        message: "Minimum 5 characters",
                                                    },
                                                    required: "Name is required",
                                                })}
                                            />
                                        </div>
                                    </div>

                                    {/* E-mail */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            {errors.email && errors.email.message ? (
                                                <small className="text-danger">{errors.email && errors.email.message}</small>
                                            ) : <small>E-mail</small>
                                            }
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control shadow-none"
                                                placeholder="Your e-mail"
                                                ref={register({
                                                    required: "E-mail is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="col-12">
                                        <div className="form-group mb-4">
                                            {errors.message && errors.message.message ? (
                                                <small className="text-danger">{errors.message && errors.message.message}</small>
                                            ) : <small>E-mail</small>
                                            }
                                            <textarea
                                                name="message"
                                                className="form-control shadow-none"
                                                placeholder="How can we help you ?"
                                                rows="5"
                                                ref={register({
                                                    minLength: {
                                                        value: 50,
                                                        message: "Minimum 50 characters",
                                                    },
                                                    required: "Message is required",
                                                })}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 text-right">
                                        <button
                                            type="submit"
                                            className="btn shadow-none"
                                        >
                                            Send Message
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;