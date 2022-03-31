import reactRouterDom from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import TeaPage from './TeaPage';
import Nav from './Nav';
import TeaReviewForm from './TeaReviewForm';
import About from './About';
import DeveloperInfo from './TeaPage';
import Search from './Search';

function Home() {
  function handleInfo(){
    // event.preventDefault();
    // alert("Thank you for sharing!");
    window.open('https://time.com/5188377/matcha-tea-benefits/#:~:text=Matcha%20is%20high%20in%20a,and%20even%20encouraging%20weight%20loss.')
  }

  return (
    <div className="Home">

     <h2>Let's get this par-tea started!</h2>
     <img className='Home-Img' onClick={handleInfo} src= "https://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2020/11/mm-2021-01_Taste_KevinKramer_NETeaHouse_G.jpg" />
     {/* <div><TeaPage teas={teas}/></div> */}
     
=======
    <h1>Hello</h1>
      <nav>
        <ul className="nav-links">
        </ul>
      </nav>

    </div>
  );
}

export default Home;