import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as fasFaThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farFaThumbsUp} from '@fortawesome/free-regular-svg-icons'
import { faCompass} from '@fortawesome/free-regular-svg-icons'

function TeaCard({ city, name, address, star, price, image, content }) {
  const [recommend, setRecommend] = useState(true);
  // const [share, setShare] = useState(true);

  function handleShare(event){
    event.preventDefault();
    window.open(`https://www.google.com/maps/place/${address}`)
  }

  function handleComment() {
    window.location.href = "/comment";
  }

    function handleClick(){
    setRecommend(!recommend);
  }

  const solidLike = <FontAwesomeIcon icon={ fasFaThumbsUp} />;
  const outlineLike = <FontAwesomeIcon icon={ farFaThumbsUp} />;
  const compass = <FontAwesomeIcon icon={faCompass} />;


  return (
    <div className="card">
    <div className='tea-card-container'>
    <img src={image} alt={name}/>
      <h3>{name}</h3>
      <h4>{address}</h4>
      <h4>{city}</h4>
      <h4>{star}</h4>
      <h4>{price}</h4>
      <h5>{content}</h5>
    </div>
      
      {recommend ? (
      <button onClick={handleClick} className="primary">
      {outlineLike} </button>
    ) : (
    <button onClick={handleClick} className="primary">{solidLike}</button>
   )}

   <button onClick={handleShare} className="primary">
    {compass} Directions
     </button>

      <button onClick={handleComment} className="primary">
        {" "}
        📝 Comment
      </button>
    </div>
  );
}

export default TeaCard;

