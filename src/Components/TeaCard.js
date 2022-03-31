import React, {useState} from "react";

function TeaCard({ city, name, address, star, price, image, content }) {
    const [recommend, setRecommend] = useState(true);

    function handleClick(){
      setRecommend(!recommend);
    }

    function handleShare(event){
      event.preventDefault();
      alert("Thank you for sharing!")
    }

    return (
      <div className='card'>
        <h4>{city}</h4>
        <h4>{name}</h4>
        <h4>{address}</h4>
        <h4>{star}</h4>
        <h4>{price}</h4>
        <h4>{content}</h4>
        <img src={image} alt={name}/>

        {recommend ? (
        <button onClick={handleClick} className="primary">
          ❤️ Recommend
        </button>
      ) : (
      <button onClick={handleClick} className="primary">🙅 Disrecommend</button>
     )}

     <button onClick={handleShare} className="primary">
      🤝 Share
       </button>

      </div>
    );
  }
  
  export default TeaCard;

