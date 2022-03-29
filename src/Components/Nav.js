import reactRouterDom from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color:'white'
  };

  return (
    <div className="Nav">
      <nav>
        <h3></h3>
        <ul className="nav-links">
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/reviews'>
            <li>Reviews</li>
          </Link>
          <Link style={navStyle} to='/developer-info'>
            <li>DeveloperInfo</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
