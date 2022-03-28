import './App.css';
import Header from './Header';
import {useState, useEffect} from 'react'; 
// import Clickable from './Clickable';




function App() {
  const headerName = "Tea Time";
  const [subHeader, setSubHeader] = useState("Discover local tea shops near you.");

  // const [photos, setPhotos] = useState([]);

  // useEffect(function(){
  //     fetch('https://api.yelp.com/v3/businesses/search')
  //     .then(response => response.json())
  //     .then(json => setPhotos(json));
  //   }, []);

  function SearchBttn(){
    setSubHeader("Now let's get this par-tea started!");
  }

  return (
    <div className='App'>
      <header className="App-header">
      <Header name={headerName} /> 
      <p>{subHeader}</p>
      
      <input placeholder="Search Location"></input>
      <button className='searchButton' onClick={SearchBttn}>Find Tea Near Me</button>
      {/* <Clickable /> */}
      <ul>
        {/* {photos.map((photo) => 
        <img 
        key ={photo.id} 
        src={photo.thumbnailUrl}
        storename={photo.title}
        alt={photo.title}
        />)} */}
      </ul>
      </header>
    </div>
  );
}

export default App;
