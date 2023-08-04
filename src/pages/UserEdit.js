import React, {useState } from 'react';
import UserModel from '../models/UserModel';
import HeroSlider from '../components/HeroSlider/HeroSlider'
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";



function UserEdit(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  


      function handleSubmit(event) {
        event.preventDefault();
    

        UserModel.edit({ username, email, password})
            .then(json => {
                this.props.history.push(`/atl-lux/user`)
            })
    }

   
        return (
            <>
            <HeroSlider />
            <div>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                <div class="form-row">
  <div class="form-group col-md-6">
  <label  htmlFor='username'>Username</label>
          <input
            class="form-control"
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='email'>email</label>
          <input
          class="form-control"
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  </div>
</div>
<div class="form-group col-md-4">
<label htmlFor='password'>Password</label>
          <input
          class="form-control"
            type='text'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

</div>
<input class="site-btn" type='submit' value='Save!' />
</form>
</div>
</>
        )
    }


export default UserEdit;