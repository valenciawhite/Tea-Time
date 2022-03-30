// import {useState, useEffect} from 'react';
import About from "./About";
import Search from "./Search";
import TeaList from "./TeaList";
import TeaReviewForm from "./TeaReviewForm";

function TeaPage() {
  // const baseUrl = 'http://localhost:3000/teashops';
  // const [teas, setTeas] = useState([])

  // function fetchTeas(){
  //   fetch(baseUrl)
  //   .then(res => res.json())
  //   .then(data => setTeas(data))
  // }

  // useEffect(fetchTeas, [])

    return (
      <div className='TeaPage'>
      {/* <About />  */}
      <Search /> 
      <TeaList /> 
      {/* <TeaReviewForm />  */}
      </div>
    );
  }
  
  export default TeaPage;