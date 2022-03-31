import React from 'react';
// import About from "./About";
import Search from "./Search";
import TeaList from "./TeaList";
// import TeaReviewForm from "./TeaReviewForm";
// import TeaCard from "./TeaCard";
import './App.css'
// import {Link} from 'react-router-dom'

import {useState, useEffect} from "react";


function TeaPage() {
  const [teas, setTeas] = useState([]);
  const [query, setQuery] = useState("");
  console.log(teas)


useEffect(fetchTeas, []);

  function fetchTeas(){
    fetch('http://localhost:3000/teas')
    .then(res => res.json())
    .then(data => setTeas(data));
  }

  const filterTeas = teas.filter((tea) => {
    return tea.city.toLowerCase().includes(query.toLowerCase());
  });

    return (
      <main>
      <div className='TeaPage'>
      <Search setQuery={setQuery}/> 
      <TeaList teas={filterTeas}/> 
      <div teas={teas}> </div>
      </div>
      </main>
    );
  }
  
  export default TeaPage;