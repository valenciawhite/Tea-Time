import React, { useState } from "react";

function TeaCard({ city, name, address, star, price, image, content }) {
  const [recommend, setRecommend] = useState(true);
  const [share, setShare] = useState(true);

  function handleClick1() {
    alert("Love to hear 😺");
    setRecommend(!recommend);
  }

  function handleClick2() {
    alert("So sad 😭");
    setRecommend(!recommend);
  }
  function handleShare() {
    alert("Thank you for sharing 👏");
    setShare(!share);
  }

  function handleComment() {
    window.location.href = "/comment";
  }

//   function renderStars(star){
//     if(star === "5"){
//       return "⭐️⭐️⭐️⭐️⭐️"
//     }else if (star === "4") {
//       return "⭐️⭐️⭐️⭐️"
//     }else if (star === "3") {
//       return "⭐️⭐️⭐️"
//   }else if (star === "2") {
//     return "⭐️⭐️"
// }else if (star === "1") {
//   return "⭐️"
// }
// }

  return (
    <div className="card">
      <h4>{city}</h4>
      <h4>{name}</h4>
      <h4>{address}</h4>
      <h4>{star}</h4>
      <h4>{price}</h4>
      <h4>{content}</h4>
      <img src={image} alt={name} />

      {recommend ? (
        <button onClick={handleClick1} className="primary">
          ❤️ Love
        </button>
      ) : (
        <button onClick={handleClick2} className="primary">
          🙅 Dislike
        </button>
      )}

      {share ? (
        <button onClick={handleShare} className="primary">
          🤝 Share
        </button>
      ) : (
        <button onClick={handleShare} className="primary">
          ✨ Shared
        </button>
      )}
      <button onClick={handleComment} className="primary">
        {" "}
        📝 Comment
      </button>
    </div>
  );
}

export default TeaCard;
