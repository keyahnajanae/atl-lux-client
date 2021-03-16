const URL = 'http://localhost:3001/api/v1/atl-lux/agents'



class AgentModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }


    static show = (agentId) => {
        return fetch(`${URL}/${agentId}`).then(response => response.json());
    }

    static delete = (agentId) => {
        return fetch(`${URL}/${agentId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    static create = (agentData) => {
        console.log(agentData)
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agentData)
        })
        .then(response => response.json());
    }

    static edit = (agentId, agentData) => {
        return fetch(`${URL}/${agentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agentData)
        })
        .then(response => response.json());
    }
}

// Create delete



export default AgentModel;
