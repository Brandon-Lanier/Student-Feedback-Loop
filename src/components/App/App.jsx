import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
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



function App() {


  return (
    <Router>
      <div className='App'>
        <Header />
        <div className="feedback-area">
        <Route path='/' exact>
          <h1>Welcome</h1>
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
      </div>
    </div>
    </Router >
  );
}

export default App;
