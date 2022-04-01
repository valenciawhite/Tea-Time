import React from "react";
import TeaCard from "./TeaCard";

function TeaList({ teas, handleDelete }) {
    const renderTeas = teas.map((tea)=>(
    <TeaCard key={tea.id} id={tea.id} city={tea.city} name={tea.name} address={tea.address} star={tea.star} price={tea.price} image={tea.image} content={tea.content} handleDelete={handleDelete} />
    ));
    return (
      <ul className='cards'>
      {renderTeas}
      </ul>
    );
  }
  
  export default TeaList;

