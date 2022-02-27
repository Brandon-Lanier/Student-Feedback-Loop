import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Support from '../Support/Support';
import ThankYou from '../ThankYou/ThankYou';
import Understand from '../Understand/Understand';
import Home from '../Home/Home';


function App() {
  

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className="feedback-area">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/feeling'>
            <Feeling />
          </Route>
          <Route path='/understand'>
            <Understand />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thankyou'>
            <ThankYou />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
        </div>
      </div>
    </Router >
  );
}

export default App;
