import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as fasFaThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farFaThumbsUp} from '@fortawesome/free-regular-svg-icons'
import { faCompass} from '@fortawesome/free-regular-svg-icons'
import React, {useState} from "react";


function TeaCard({ city, name, address, star, price, image, content }) {
    const [recommend, setRecommend] = useState(true);

    function handleClick(){
      setRecommend(!recommend);
    }

    function handleShare(event){
      event.preventDefault();
      // alert("Thank you for sharing!");
      window.open('https://www.google.com/maps')
    }

    const solidLike = <FontAwesomeIcon icon={ fasFaThumbsUp} />;
    const outlineLike = <FontAwesomeIcon icon={ farFaThumbsUp} />;
    const compass = <FontAwesomeIcon icon={faCompass} />;

    return (
      <div className='card'>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <h4>{address}</h4>
        <h4>{city}</h4>
        <h4>{star}</h4>
        <h4>{price}</h4>
        <h5>{content}</h5>
        

        {recommend ? (
        <button onClick={handleClick} className="primary">
        {outlineLike} </button>
      ) : (
      <button onClick={handleClick} className="primary">{solidLike}</button>
     )}

     <button onClick={handleShare} className="primary">
      {compass} Directions
       </button>

      </div>
    );
  }
  
  export default TeaCard;