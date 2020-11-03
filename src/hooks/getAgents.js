import { useState, useEffect } from "react";
import AgentModel from '../models/AgentModel'

function GetAgents(agentId) {
  const [agents, setAgents] = useState([]);

  function fetchAgents(id) {
    if (id) {
      AgentModel.show(id).then((data) => {
        setAgents(data.agent);
      })
    } else {
      AgentModel.all().then((data) => {
        setAgents(data.agents);
      });
    }
  }

  useEffect(
    function () {
      fetchAgents(agentId);
    },
    [agentId]
  );

  return [agents, fetchAgents];
}

export default GetAgents;