import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Header from "../../Components/HomePage/Header";
import Courses from '../../Components/HomePage/Courses';
import Blog from '../../Components/HomePage/Blog';
import WorkShop from '../../Components/HomePage/WorkShop';
import ClassNote from '../../Components/HomePage/ClassNote';
import VideoReview from '../../Components/HomePage/VideoReview';
import CourseBenifite from '../../Components/HomePage/CourseBenifite';
import Reviews from '../../Components/HomePage/Reviews';


const Index = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setCourses(result.data)
        }
        fetchCourses()
    }, [])


    return (
        <div className="home">
            <NavBar />
            <Header />
            <Courses courses={courses} />
            <Blog />
            <WorkShop />
            <ClassNote />
            <VideoReview />
            <CourseBenifite />
            <Reviews reviews={courses} />
            <Footer />
        </div>
    );
};

export default Index;