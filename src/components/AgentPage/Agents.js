import React from 'react';
import AgentCard from './AgentCard';
import './Agents.css'



const Contractors = (props) => {
    function generateAgents(contractor) {
        return contractor.map(agent => {
            return <AgentCard key={agent._id} property={agent} />
        })
    }

    return (
        <div className='container'>
            {generateAgents(props.data)}
        </div>
    )
}

export default Contractors;
