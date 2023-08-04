import React, { useState, Link } from 'react'
import PropertyModel from '../models/PropertyModel'
import'./Login.css'



function NewProperty(props) {
    const [title, setTitle] = useState("");
    const [user, setUser] = useState(null);
    const [type, setType] = useState("");
    const [baths, setBaths] = useState(""); 
    const [beds, setBeds] = useState(""); 
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [photos, setPhotos] = useState("");
    const [description, setDescription] = useState("")
 


// make an if statement for of type is for-rent to redirect to for-rent page and if its for-sale to redirect to sales page
function handleSubmit(event) {
    event.preventDefault();

    PropertyModel.create({ title, user, type, baths, beds, price, address, photos }).then(
      (data) => {
        props.history.push(`/atl-lux/`);
      }
    );
    }

  return (
    <>
  
    
      
      <body class="login">
     
<main class="login-form">
    <div class="cotainer">
 <form onSubmit={handleSubmit}>
 <h2 class="a-a">New Listing</h2> 
<div class="form-row">
  <div class="form-group col-md-4">
  <label  htmlFor='title'>Title</label>
          <input
            class="form-control"
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
  </div>
  <div class="form-group col-md-5">
  <label htmlFor='type'>Type (Please enter for-sale or for-rent)</label>
          <input
          class="form-control"
            type='text'
            name='type'
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
  </div>
  <div class="form-group col-md-9">
  <label htmlFor='description'>description</label>
          <input
          class="form-control"
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
  </div>
</div>
<div class="form-row">
<div class="form-group col-md-4">
<label htmlFor='beds'>Bed</label>
          <input
          class="form-control"
            type='text'
            name='beds'
            onChange={(e) => setBeds(e.target.value)}
            value={beds}
          />
</div>
<div class="form-group col-md-5">
<label htmlFor='baths'>Baths</label>
          <input
          class="form-control"
            type='text'
            name='baths'
            onChange={(e) => setBaths(e.target.value)}
            value={baths}
          />
</div>
</div>
<div class="form-row">
  <div class="form-group col-md-4">
  <label htmlFor='price'>Price</label>
          <input
          class="form-control"
            type='text'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
  </div>
  <div class="form-group col-md-5">
  <label htmlFor='photos'>Image URL</label>
          <input
          class="form-control"
            type='text'
            name='photos'
            onChange={(e) => setPhotos(e.target.value)}
            value={photos}
          />
  </div>
  <div class="form-group col-md-9">
  <label htmlFor='address'>address</label>
          <input
          class="form-control"
            type='text'
            name='address'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
  </div>
</div>
<input id="a-s-p"class="site-btn" type='submit' value='Save!' />
</form>
</div>
</main>
</body>
</>
  );
  }


export default NewProperty;