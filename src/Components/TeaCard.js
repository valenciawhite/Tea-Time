import React, {useState} from "react";

function TeaCard({city, name, address, star, price, image}) {
  
    return (
      <div className='TeaCard'>
        <h2>{city}</h2>
        <h2>{name}</h2>
        <h2>{address}</h2>
        <h3>{star}</h3>
        <h3>{price}</h3>
        <h3>{image}</h3>
      </div>
    );
  }
  
  export default TeaCard;
