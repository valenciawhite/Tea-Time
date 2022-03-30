import React, { useState } from "react";

function TeaReviewForm(handleForm) {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [star, setStar] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleStar(e) {
    setStar(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      city: city,
      name: name,
      address: address,
      star: star,
      price: price,
      image: image,
    };

    fetch(" http://localhost:3000/teas", {
      method : "POST",
      headers : { "Content-Type": "application/json",
      Accepts: "application/json",},
      body: JSON.stringify(newReview),
    })
    .then((res) => res.json())
    .then((newReview ) => handleForm(newReview))
  }

  return (
    <div className="TeaReviewForm">
      <h1>Have A Café You Want To Shoutout? 
      <br/>
      Leave Us A Review!</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleCity} value={city} type="text" name="city" placeholder="City" />
        <input onChange={handleName} value={name} type="text" name="name" placeholder="Name" />
        <input onChange={handleAddress} value={address} type="text" name="address" placeholder="Address" />
        <input onChange={handleStar} value={star} type="text" name="star" placeholder="Star " />
        <input onChange={handlePrice} value={price} type="text" name="price" placeholder="Price" />
        <input onChange={handleImage} value={image} type="text" name="image" placeholder="Image URL" />
        <button type="submit">Submit Review</button>
       </form>
    </div>
  );
}

export default TeaReviewForm;

