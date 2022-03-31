import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import React, {useState, useEffect} from 'react';
import './App.css';
// import Header from './Header';
import TeaPage from './TeaPage';
import Nav from './Nav';
import TeaReviewForm from './TeaReviewForm';
import About from './About';
// import DeveloperInfo from './TeaPage';
// import Search from './Search';
import Home from './Home'

function App() {


  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tea-shop" component={TeaPage} />
          <Route path="/comment" component={TeaReviewForm} />
      </Switch>
      
    </div>

  </Router>
  );
}
export default App;