import React, { useState } from "react";
import AuthModel from "../models/AuthModel";
import UserModel from "../models/UserModel";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

import './Login.css'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.login({ email, password }).then((response) => {
      console.log(response);
      localStorage.setItem("uid", response.signedJwt);
      UserModel.show().then((response) => {
        console.log(response);
        setUser(response.data);
        props.history.push("/atl-lux");
      });
    });
  }

  return (<>
 
    <body id="login-2" class="login">
<main class="login-form">
    <div class="cotainer">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group row">
                            
                                <div class="col-md-6">
                                <label htmlFor='email'>Email</label>
          <input type='text'id="email_address" class="form-control" name="email" required autofocus 
          onChange={(e) => setEmail(e.target.value)}value={email}/>
                                </div>
                            </div>

                            <div class="form-group row">
                            <label htmlFor='password'>Password</label>
          
                                <div class="col-md-6">
                                   <input
          id="password" class="form-control" name="password" required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"/> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                            <input type='submit' value='Login' />
                                <a href="#" class="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                    </form>
                    </div>
            </div>
        </div>
    </div>
    </div>
</main>
</body>
    </>
   
  );
}

export default Login;

