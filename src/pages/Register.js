import React, { useState } from "react";
import AuthModel from "../models/AuthModel";
import './Login.css'



function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    AuthModel.register({ username, email, password }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        props.history.push("/atl-lux/login");
      } else {
        setError(response.message);
      }
    });
  }

  return (<>
    
    <body class="login">
<main class="login-form">
    <div class="cotainer">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register for an Account!</div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
                            <label htmlFor='username'>username</label>
          
                                <div class="col-md-6">
                                   <input
          id="username" class="form-control" name="username" required
            type='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
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
                            <input type='submit' value='Register' />
                                
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

export default Register;