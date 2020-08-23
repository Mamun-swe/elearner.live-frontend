import React, { useEffect } from 'react';
import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home/Index';
import FourOFourPage from './Pages/fourOfour/Index';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 })
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={FourOFourPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
