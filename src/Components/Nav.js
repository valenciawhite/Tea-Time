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
        {/* <span className="logo" role="img">
          🌱
        </span> */}
      </h1>
      <nav>
        <ul className="nav-links">
        <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/about'>
            <li>About </li>
          </Link>
           <Link style={navStyle} to='/tea-shop'>
            <li>Location</li>
          </Link>
           <Link style={navStyle} to='/comment'>
            <li>Comment</li>
          </Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Nav;

