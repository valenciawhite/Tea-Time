// import reactRouterDom from 'react-router-dom';
import './App.css';
// import { Link } from 'react-router-dom';
// import TeaPage from './TeaPage';
// import Nav from './Nav';
// import TeaReviewForm from './TeaReviewForm';
// import About from './About';
// import DeveloperInfo from './TeaPage';
// import Search from './Search';

function Home({teas}) {

  function handleBlack(){
    window.open('https://www.hackberrytea.com/blogs/tea-education/the-benefits-of-black-tea')
  }
  function handleMatcha(){
    window.open('https://www.heavenlytealeaves.com/blogs/heavenly-tea-leaves-blog/matcha-a-superfood-in-disguise')
  }
  function handleYerba(){
    window.open('https://gopuff.com/blog/food-drink/yerba-mate-benefits')
  }

  return (

    <div className="Home">

        <img alt='black tea'src='https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' height='460' width='460' />
     
        <img alt='matcha tea' src='https://images.unsplash.com/photo-1566373104181-133b57c9fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' height='460' width='510'/> 
  
        <img alt='yerba mate tea' src='https://images.unsplash.com/photo-1585744259332-111384f5def9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' height='460' width='460' />
   
     <br/>

     <h3>Black Tea</h3>
     <h3>Matcha Tea</h3>
     <h3>Yerba Mate Tea</h3>

     <br/>
     <button onClick={handleBlack} className='home-button'>Learn More</button>
     <button onClick={handleMatcha} className='home-button'>Learn More</button>
     <button onClick={handleYerba} className='home-button'>Learn More</button>
    </div>
  );
}

export default Home;