import React, { useState } from "react";
import TeaCard from "./TeaCard";
import TeaList from "./TeaList";

function TeaReviewForm({setTeas, teas, renderTeas}) {
  const [newCity, setNewCity] = useState("");
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newStar, setNewStar] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newContent, setNewContent] = useState("");

  function handleNewCity(event) {
    setNewCity(event.target.value)
  }

  function handleNewName(event) {
    setNewName(event.target.value)
  }

  function handleNewAddress(event) {
    setNewAddress(event.target.value)
  }

  function handleNewStar(event) {
    setNewStar(event.target.value)
  }

  function handleNewPrice(event) {
    setNewPrice(event.target.value)
  }

  function handleNewImage(event) {
    setNewImage(event.target.value)
  }

  function handleNewContent(event) {
    setNewContent(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Check out your added location!")
    window.open('https://www.yelp.com/');

    const newReview = {
      city: newCity,
      name: newName,
      address: newAddress,
      star: newStar,
      price: newPrice,
      image: newImage,
      content: newContent
    };

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
      <h1>Help us find more shops 🌱 </h1>
      <h1>We would love to hear from you! </h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleNewCity} type="text" name="city" placeholder="your city" />
        <input onChange={handleNewName} type="text" name="name" placeholder="tea shop name" />
        <input onChange={handleNewAddress} type="text" name="address" placeholder="address" />
        <input onChange={handleNewStar} type="text" name="star" placeholder="star ⭐" />
        <input onChange={handleNewPrice} type="text" name="price" placeholder="$~$$$$$" />
        <input onChange={handleNewImage} type="text" name="image" placeholder="image URL" />
        <textarea onChange={handleNewContent} type="text" name="content" placeholder="comment" rows={5} />
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default TeaReviewForm;
