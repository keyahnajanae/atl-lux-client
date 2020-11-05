import React, { useState } from 'react'
import PropertyModel from '../models/PropertyModel'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import './Prop.css'




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
    <HeroSlider/>
   
    
      <h2>New Property</h2> 

 <form onSubmit={handleSubmit}>
<div class="form-row">
  <div class="form-group col-md-6">
  <label  htmlFor='title'>Title</label>
          <input
            class="form-control"
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='type'>Type (Please enter for-sale or for-rent)</label>
          <input
          class="form-control"
            type='text'
            name='type'
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
  </div>
  <div class="form-group col-md-6">
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
<div class="form-group col-md-4">
<label htmlFor='baths'>Baths</label>
          <input
          class="form-control"
            type='text'
            name='baths'
            onChange={(e) => setBaths(e.target.value)}
            value={baths}
          />
</div>
<div class="form-row">
  <div class="form-group col-md-6">
  <label htmlFor='price'>Price</label>
          <input
          class="form-control"
            type='text'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
  </div>
  <div class="form-group col-md-4">
  <label htmlFor='photos'>Image URL</label>
          <input
          class="form-control"
            type='text'
            name='photos'
            onChange={(e) => setPhotos(e.target.value)}
            value={photos}
          />
  </div>
  <div class="form-group col-md-2">
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
<input class="site-btn" type='submit' value='Save!' />
</form>
</>
  );
  }


export default NewProperty;