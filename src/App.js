import React, { useEffect } from 'react';
import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home/Index';
import HelpLine from './Pages/HelpLine/Index';
import PrivacyPolicy from './Pages/PrivacyPolicy/Index';
import TermsCondition from './Pages/Terms/Index';
import Team from './Pages/Team/Index';
import FourOFourPage from './Pages/fourOfour/Index';

import ScrollToTop from './Components/ScrollToTop';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 })
  })

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/help-line" component={HelpLine} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/terms-conditions" component={TermsCondition} />
            <Route exact path="/who-we-are" component={Team} />
            <Route path="*" component={FourOFourPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
