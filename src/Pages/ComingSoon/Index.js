import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../Components/styles/comming-soon.scss';
import ComingImg from '../../assets/coming.png';

const Index = () => {
    const history = useHistory()
    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000)
        } else {
            history.push('/home')
        }
    })

    return (
        <div className="coming-soon">
            <div className="flex-center flex-column text-center">
                <img src={ComingImg} className="img-fluid" alt="..." />
                <h1>we <span>|</span> coming <span>|</span> soon</h1>
                <h2>wait <span>|</span> {seconds}<span className="second">s</span></h2>

                <a href="https://forms.gle/dJANLFTWoqLTDpjc8"
                    type="button"
                    className="btn shadow-none text-white">Free Registration</a>
            </div>
        </div>
    );
};

export default Index;