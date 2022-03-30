import React, { useState } from "react";

function TeaReviewForm({setTeas, teas, addReview}) {
  const [newCity, setCity] = useState("");
  const [newName, setName] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newStar, setStar] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newImage, setImage] = useState("");
  const [newContent, setContent] = useState("");

  function handleNewCity(e) {
    setCity(e.target.value)
  }

  function handleNewName(e) {
    setName(e.target.value)
  }

  function handleNewAddress(e) {
    setAddress(e.target.value)
  }

  function handleNewStar(e) {
    setStar(e.target.value)
  }

  function handleNewPrice(e) {
    setPrice(e.target.value)
  }

  function handleNewImage(e) {
    setImage(e.target.value)
  }

  function handleNewContent(e) {
    setContent(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newReview = {
      city: newCity,
      name: newName,
      address: newAddress,
      star: newStar,
      price: newPrice,
      image: newImage,
      review: newContent
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
      <h1>Review Page</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNewCity} type="text" name="city" placeholder="City" />
        <input onChange={handleNewName} type="text" name="name" placeholder="Name" />
        <input onChange={handleNewAddress}  type="text" name="address" placeholder="Address" />
        <input onChange={handleNewStar} type="text" name="star" placeholder="Star" />
        <input onChange={handleNewPrice} type="text" name="price" placeholder="Price" />
        <input onChange={handleNewImage} type="text" name="image" placeholder="Image URL" />
        <textarea onChange={handleNewContent} type="text" name="review" placeholder="Review" rows={5} />
        <button type="submit">Submit Review</button>
       </form>
    </div>
  );
}

export default TeaReviewForm;
