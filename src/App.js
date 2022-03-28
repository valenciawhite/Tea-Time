import './App.css';
import Header from './Header';
import {useState} from 'react'; 
// import Clickable from './Clickable';
// import { API_BASE, BEARER_TOKEN } from "./config";
// import queryString from 'query-string'




function App() {
  const headerName = "Tea Time";
  const [subHeader, setSubHeader] = useState("Discover local tea shops near you.");
//  const API_BASE = 'https://api.yelp.com/v3';

// //GET RID OF. SEND TO BACKEND
// const BEARER_TOKEN='ZnAtW8RCv1mLiVW5ARhe_n5XooOvLR7t7tuAWTimm4Qil952jcOgwaQkNkHjipYlU6T1N8zPFY7EC7r_-sg5tUxf-E97uLAFgrvpeMULjVq3uTn2LunW81ugZtVBYnYx';

  // const [photos, setPhotos] = useState([]);

  // useEffect(function(){
  //     fetch('API_BASE')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  //   }, []);

  //     function get(path, queryParams){
  //       const query= queryString.stringify(queryParams);
  
  //     return fetch `$(API_BASE)${path}?${query}`, {
  //         headers:{
  //             Authrization: `Bearer ${BEARER_TOKEN}`,
  //             Origin: 'localhost',
  //             withCredentials: true,
  //         }
  //     }, console.log("i work!");
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
    </div>
  );
}

export default App;
