import React, {useState} from "react";

function TeaCard({ city, name, address, star, price, image }) {
    const [recommend, setRecommend] = useState(true);

    function handleClick(){
      setRecommend(!recommend);
    }
    return (
      <div className='TeaCard'>
        <h2>{city}</h2>
        <h2>{name}</h2>
        <h2>{address}</h2>
        <h3>{star}</h3>
        <h3>{price}</h3>
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
