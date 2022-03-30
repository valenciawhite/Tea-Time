import React, {useState, useEffect} from 'react';
import About from "./About";
import Search from "./Search";
import TeaList from "./TeaList";
import TeaReviewForm from "./TeaReviewForm";
import TeaCard from "./TeaCard"

function TeaPage({teas}) {
//   const baseUrl = 'http://localhost:3000/teas'
//   const [teas, setTeas] = useState([])
  const [query, setQuery] = useState("")
console.log(teas)
// useEffect(fetchTeas, []);

//   function fetchTeas(){
//     fetch(baseUrl)
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }
  const filterTeas = teas.filter((tea) => {
    return tea.city.toLowerCase().includes(query.toLowerCase());
  });

    return (
      <main>
      <div className='TeaPage'>
      {/* <About />  */}
      <Search setQuery={setQuery}/> 
      <TeaList teas={filterTeas}/> 
      <TeaReviewForm teas={teas}/>
      <TeaCard teas={teas} />
      </div>
      </main>
    );
  }
  
  export default TeaPage;
