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
      </h1>
      <nav>
        <ul className="nav-links">
        <Link style={navStyle} to='/'>
            <li>Main</li>
          </Link>
          <Link style={navStyle} to='/tea-shop'>
            <li>Find Tea Shops</li>
          </Link>
           <Link style={navStyle} to='/comment'>
            <li>Leave A Review</li>
          </Link>
           <Link style={navStyle} to='/about'>
            <li>About Us </li>
          </Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Nav;

