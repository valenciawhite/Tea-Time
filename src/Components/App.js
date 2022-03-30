import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import TeaPage from './TeaPage';
import Nav from './Nav';
import TeaReviewForm from './TeaReviewForm';
import About from './About';
import DeveloperInfo from './DeveloperInfo';
import Search from './Search';
import Home from './Home'

function App() {
  const [teas, setTeas] = useState([])
  const baseUrl = 'http://localhost:3000/teas'

useEffect(fetchTeas, []);

  function fetchTeas(){
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => setTeas(data))
  }
  console.log(teas)


  function addReview(newReview){
    const updateTea = [...teas, newReview]
    setTeas(updateTea)
  }

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
          <Nav teas={teas} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/reviews" component={TeaReviewForm} />
            {/* <TeaReviewForm addReview={addReview} /> */}
            <Route path="/developer-info" component={DeveloperInfo} />
          <Header />
        </Switch>
         <div><TeaPage teas={teas}/></div>
      </div>

    </Router>
    
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
// {/* <div><TeaPage teas={teas}/></div> */}
//   </div>
// );

export default App;