import React, {useState} from "react";

function TeaCard({ city, name, address, star, price, image }) {
    const [recommend, setRecommend] = useState(true);

    function handleClick(){
      setRecommend(!recommend);
    }
    return (
      <div className='card'>
        <h4>{city}</h4>
        <h4>{name}</h4>
        <h4>{address}</h4>
        <h4>{star}</h4>
        <h4>{price}</h4>
        <img src={image} alt={name}/>

        {recommend ? (
        <button onClick={handleClick} className="primary">
          ❤️ Recommend
        </button>
      ) : (
        <button onClick={handleClick}>🙅 Disrecommend</button>
      )}
      </div>
    );
  }
  
  export default TeaCard;
