import './App.css';
import Header from './Header';
import {useState} from 'react'; 
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'

const center = {lat:40.730610 , lng:-73.935242}
function App(){
  const headerName = "Tea Time";
  const [subHeader, setSubHeader] = useState("Discover local tea shops near you.");
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  // if (!isLoaded){
  //   return </>

  // }

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

      <GoogleMap center={center} 
      zoom={15} 
      mapContainerStyle={{width: '100%', height: '100%'}}>
        
      </GoogleMap>
    </div>
  );
     }

export default App