import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TeaPage from './TeaPage';
import Nav from './Nav';
import TeaReviewForm from './TeaReviewForm';
import About from './About';
import DeveloperInfo from './DeveloperInfo';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/reviews" component={TeaReviewForm} />
            <Route path="/developer-info" component={DeveloperInfo} />
          <Header />
          <TeaPage />
        {/* </header> */}
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;