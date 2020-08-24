import React, { useEffect } from 'react';
import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home/Index';
import PrivacyPolicy from './Pages/PrivacyPolicy/Index';
import TermsCondition from './Pages/Terms/Index';
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
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-conditions" component={TermsCondition} />
          <Route path="*" component={FourOFourPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
