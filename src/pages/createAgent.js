import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgentModel from '../models/AgentModel'
import HeroSlider from '../components/HeroSlider/HeroSlider'



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
    <HeroSlider/>
   
    
      <h2>Add Agent</h2> 

 <form onSubmit={handleSubmit}>
<div class="form-row">
  <div class="form-group col-md-6">
  <label  htmlFor='name'>Name</label>
          <input
            class="form-control"
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='experience'>experience (Please enter in years)</label>
          <input
          class="form-control"
            type='text'
            name='experience'
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor='agency'>agency</label>
          <input
          class="form-control"
            type='text'
            name='agency'
            onChange={(e) => setAgency(e.target.value)}
            value={agency}
          />
  </div>
</div>
<div class="form-group col-md-4">
<label htmlFor='number'>number</label>
          <input
          class="form-control"
            type='text'
            name='number'
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
</div>
<input class="site-btn" type='submit' value='Submit' />
</form>
</>
  );
  }


export default CreateAgent;