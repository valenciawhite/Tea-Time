import reactRouterDom from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

function Home({teas}) {

  const navStyle = {
    color:'white'
  };

  return (
    <div className="Home">
    <h1>Hello</h1>
      <nav>
        <ul className="nav-links">
        </ul>
      </nav>
    </div>
  );
}

export default Home;
