import React from 'react';
import '../../Components/styles/class-room-layout.scss';
import { Route } from 'react-router-dom';

import Layout from '../../Components/ClassRoom/Layout';
import CourseShow from '../ClassRoom/CourseShow';
import SingleCourse from '../ClassRoom/SingleCourse';
import PaymentPage from '../ClassRoom/Payment';

const Master = () => {

    return (
        <div className="account-master">
            <Layout />
            <div className="main">
                <Route exact path="/classroom/courses/:section/:sectionName" component={CourseShow} />
                <Route exact path="/classroom/course/:courseId" component={SingleCourse} />
                <Route exact path="/classroom/payment/course/:courseId" component={PaymentPage} />
            </div>
        </div>
    );
};

export default Master;