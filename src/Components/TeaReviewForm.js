import React, { useState } from "react";
import TeaCard from "./TeaCard";
import TeaList from "./TeaList";

function TeaReviewForm({setTeas, teas, renderTeas}) {
  const [newCity, setNewCity] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  // const [newStar, setNewStar] = useState("");
  // const [newPrice, setNewPrice] = useState("");
  // const [newImage, setNewImage] = useState("");
  const [newContent, setNewContent] = useState("");

  function handleNewCity(event) {
    setNewCity(event.target.value)
  }

  function handleNewName(event) {
    setNewName(event.target.value)
  }

  function handleNewEmail(event) {
    setNewEmail(event.target.value)
  }

  // function handleNewStar(e) {
  //   setNewStar(e.target.value)
  // }

  // function handleNewPrice(e) {
  //   setNewPrice(e.target.value)
  // }

  // function handleNewImage(e) {
  //   setNewImage(e.target.value)
  // }

  function handleNewContent(event) {
    setNewContent(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newReview = {
      city: newCity,
      name: newName,
      email: newEmail,
      // address: newAddress,
      // star: newStar,
      // price: newPrice,
      // image: newImage,
      content: newContent
    };

  //backend submit//

    fetch(" http://localhost:3000/teas",{
      method : "POST",
      headers : { "Content-Type": "application/json",
      Accepts: "application/json",},
      body: JSON.stringify(newReview),
    })
    .then((res) => res.json())
    .then((newReview) => setTeas([...teas, newReview]))
  }

  return (
    <div className="TeaReviewForm">
      <h1>Questions or Comments? </h1>
      <h1>We would love to hear from you! </h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleNewName} type="text" name="name" placeholder="name" />
        <input onChange={handleNewCity} type="text" name="city" placeholder="city" />
        <input onChange={handleNewEmail}  type="text" name="address" placeholder="email" />
        {/* <input onChange={handleNewStar} type="text" name="star" placeholder="Star" />
        <input onChange={handleNewPrice} type="text" name="price" placeholder="Price" />
        <input onChange={handleNewImage} type="text" name="image" placeholder="Image URL" /> */}
        <textarea onChange={handleNewContent} type="text" name="content" placeholder="comment" rows={5} />
        <button type="submit">Submit Review</button>
       </form>
       {/* <TeaReviewForm teas={teas}/> */}
    </div>
  
  )
}

export default TeaReviewForm;
