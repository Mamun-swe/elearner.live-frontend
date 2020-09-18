import React from 'react';
import '../Components/styles/loading.scss';
import { Icon } from 'react-icons-kit';
import { spinner2 } from 'react-icons-kit/icomoon';

const Loading = () => {
    return (
        // <div className="loading">
        //     <div className="container">
        //         <div className="item-1"></div>
        //         <div className="item-2"></div>
        //         <div className="item-3"></div>
        //         <div className="item-4"></div>
        //         <div className="item-5"></div>
        //     </div>
        // </div>
        <div className="loading">
            <div className="flex-center flex-column">
                <Icon icon={spinner2} size={25} className="spin" />
            </div>
        </div>
    );
};

export default Loading;