import reactRouterDom from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color:'white'
  };

  return (
    <div className="Nav">
      <header>
      <h1>
        Tea Time
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <nav>
        <ul className="nav-links">
        <Link style={navStyle} to='/home'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/about'>
            <li>About </li>
          </Link>
          <Link style={navStyle} to='/reviews'>
            <li>Reviews </li>
          </Link>
          <Link style={navStyle} to='/developer-info'>
            <li>Developer Info </li>
          </Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Nav;

