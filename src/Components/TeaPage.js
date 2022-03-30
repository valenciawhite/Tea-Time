import React, {useState, useEffect} from 'react';
import About from "./About";
import Search from "./Search";
import TeaList from "./TeaList";
import TeaReviewForm from "./TeaReviewForm";

function TeaPage() {
  const baseUrl = 'http://localhost:3000/teas';
  const [teas, setTeas] = useState([])
  const [query, setQuery] = useState("")

useEffect(fetchTeas, []);

  function fetchTeas(){
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => setTeas(data))
  }

  const filterTeas = teas.filter((tea) => {
    return tea.city.toLowerCase().includes(query.toLowerCase());
  });

    return (
      <div className='TeaPage'>
      {/* <About />  */}
      <Search setQuery={setQuery}/> 
      <TeaList /> 
      {/* <TeaReviewForm />  */}
      {/* <TeaCard teaCards={teaCards} /> */}
      </div>
    );
  }
  
  export default TeaPage;
