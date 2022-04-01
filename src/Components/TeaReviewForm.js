import React, { useState } from "react";

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
    alert("Thank You For Your Submission! Check It Out!")
    window.location.href='/tea-shop'
    // window.open('/tea-shop');

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
      <br/>

      <form onSubmit={handleSubmit}>
        <select onChange={handleNewCity}>
        <option>Select a City</option> 
        <option>Austin, TX</option><option>Atlanta, GA</option><option>Baltimore, MD</option><option>Boston, MA</option><option>Charlotte, NC</option><option>Chicago, IL</option> <option>Dallas, TX</option> <option>Denver, CO</option><option>Detroit, MI</option><option>Houston, TX</option><option>Indianapolis, IN</option><option>Kansas City, MO</option><option>Las Vegas, NV</option><option>Los Angeles, CA </option>
        <option>Miami, FL</option><option>Milwaukee, WI</option><option>Minneapolis, MN</option><option>Nashville, TN</option><option>New York, NY</option> <option>Philadelphia, PA</option> <option>San Francisco, CA</option> <option>St Louis, MO </option><option>Seattle, WA</option><option>Washington DC</option>
        </select>

        <input onChange={handleNewName} type="text" placeholder="Tea Shop Name" />
        <input onChange={handleNewAddress} type="text" name="Address" placeholder="address" />
      
        <select onChange={handleNewStar}>

        <option>Rating </option><option>⭐️</option><option>⭐️⭐️</option><option>⭐️⭐️⭐️</option> <option>⭐️⭐️⭐️⭐️</option> <option>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        
        <select onChange={handleNewPrice}>
        <option>Price</option><option>💰</option><option>💰💰</option><option>💰💰💰</option> <option>💰💰💰💰</option> <option>💰💰💰💰💰</option>
        </select>
        <input onChange={handleNewImage} type="text" placeholder="Image URL" />
        <textarea onChange={handleNewContent} type="text" placeholder="Tell us about your experience..." />
    
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default TeaReviewForm;
