import React from 'react';
import AgentCard from './AgentCard';
import './Agents.css'


const Agents = (props) => {
    function generateAgents(agents) {
        return agents.map(agent => {
            return <AgentCard key={agent._id} agent={agent} />
        })
    }

    return (
        <div className='container'>
            {generateAgents(props.data)}
        </div>
    )
}

export default Agents;
