import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = (props) => {
    const { title, agent, address, _id} = props.property;
    console.log('agent', agent)

    return (
        <>
            <Link to={`/atl-lux/properties/${_id}`}>
                <div className='property-card'>
                    <div className='image-wrapper'>
                        
                    </div>
                    <h3>{title}</h3>
                     <h2>{address}</h2>
                </div>
            </Link>
         {agent ? <p>Uploaded By: {agent.name}</p> : ""}
            <Link to={`/properties/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
        </>
    )
}

export default PropertyCard;

