import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function About() {

  function handleProfileEthan(){
    window.open('https://github.com/ethanlyonlee')
  }
  function handleProfileValencia(){
    window.open('https://github.com/valenciawhite')
  }

  const githubIcon = <FontAwesomeIcon icon={ ['fab', 'github'] } />
  
    return (
      <div className='About'>
      <h1>About Us</h1>
      <p className="About-P">
      Matcha, Oolong, or Thai? How about all of them! 
      <br/>
      With Tea Time, a geo-scoped list is delivered to users, 
      <br/>
      helping bridge the gap between tea-lovers and tea-café owners.
      <br/>
      <br/>

      Made by avid tea lovers, Ethan Lee and Valencia White, they set out to make a 
      <br/>
      web application suitable for the finest of tea connoisseurs.
      </p>
      <br/>
      <img className='About-Img' src="https://images.unsplash.com/photo-1500388953054-0d94398c7bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="spoonfulls of tea"/>

      <div className="about-container-2">
      <h3 className='about-h3-2'> Ethan Lee</h3>
      <h4>Favorite Tea?</h4>
      <ul>
        <li>
          <h5>~ Peppermint Tea ~</h5>
          <h5>~ Chai Tea ~</h5>
          <h5>~ Green Tea ~</h5>
        </li>
      </ul>
      </div>

      <div className="about-container">
      <h3 className='about-h3'> Valencia White</h3>
      <h4>Favorite Tea?</h4>
      <ul>
        <li>
          <h5>~ Iced Matcha w/ Oat Milk ~</h5>
          <h5>~ Earl Grey ~</h5>
          <h5>~ Yerba Maté ~</h5>
        </li>
      </ul>
      </div>

      <div className="about-details">
        <img onClick={handleProfileEthan} className='about-image' alt='ethan avatar' src="https://avatars.githubusercontent.com/u/98246122?v=4"/>
        <img onClick={handleProfileValencia} className='about-image' alt='valencia avatar' src="https://lh3.googleusercontent.com/pw/AM-JKLVl_aMjq06cmsyqvfSqknFfsqmXzfmpHN3XHxROMZWALsHRwj829rkuXMUhP6j0jqWvF5if9ypFuTrOWMeyOnPewkrTsuVb8N2pilGnnM70KTs4cbOoDeL4NxXr5_S1-JKawm47Nat7ugFxoqqv3euO=w1214-h1619-no?authuser=0"/>
      </div>
     
      </div>
    );
  }
  
  export default About;





