import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgentModel from '../models/AgentModel'
import'./Login.css'



function CreateAgent(props) {
    const [name, setName] = useState("");
    const [agency, setAgency] = useState("");
    const [number, setNumber] = useState("");
    const [experience, setExperience] = useState(""); 
    const [_id, set_id] = useState(""); 
 


function handleSubmit(event) {
    event.preventDefault();

    AgentModel.create({ name, agency, number, experience }).then(
      (data) => {
        props.history.push("/atl-lux/agents");
      }
    );
    }

  return (
    <>
    
   
    
    
<body className="login">
  
<main class="login-form">
  <div className="cotainer">
 <form onSubmit={handleSubmit}>
 <h2 class="a-a">Add Agent</h2> 
<div class="form-row">
  <div class="form-group col-md-4">
  <label  htmlFor='name'>name</label>
          <input
            class="form-control"
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
  </div>
  <div class="form-group col-md-5">
  <label htmlFor='experience'>experience(minimalist, etc.)</label>
          <input
          class="form-control"
            type='text'
            name='experience'
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          />
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-4">
  <label htmlFor='agency'>agency</label>
          <input
          class="form-control"
            type='text'
            name='agency'
            onChange={(e) => setAgency(e.target.value)}
            value={agency}
          />
  </div>

<div class="form-group col-md-5">
<label htmlFor='number'>number</label>
          <input
          class="form-control"
            type='text'
            name='number'
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          </div>
</div>
<input id="a-a-s" class="site-btn" type='submit' value='Submit' />
</form>
</div>
</main>
</body>
</>
  );
  }


export default CreateAgent;