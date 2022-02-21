import HeroSlider from '../components/HeroSlider/HeroSlider'
import AgentModel from '../models/AgentModel'
import React, { useEffect, useState} from 'react';
import Agents from '../components/AgentPage/Agents';
import Action from '../components/Features/Action'

import './AgentList.css'



function AgentList(props) {
    const [agents, setAgents] = useState(null);
  
    function fetchAgents() {
        AgentModel.all().then((data) => {
          setAgents(data.agents);
          console.log(agents)
        }).catch(error =>{
          console.log(error)
        });
      }
    useEffect(
      function () {
        fetchAgents();
      },
      []
    );
  
    return (<>
         {/* <HeroSlider/> */}
      <div>
        <h1 class="a-c">All Contractors</h1>
   
        {agents !== null ? <Agents data={agents} /> : <h1> Coming Soon ...</h1>}
      </div>
      <Action />
      </>
    );
  }
  
  export default AgentList;

