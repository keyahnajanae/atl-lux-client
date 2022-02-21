import React from 'react';
import PropertyCard from './PropertyCard';
import './Properties.css'




const Properties = (props) => {
    function generateProperties(properties) {
        return properties.map(property => {
            return <PropertyCard key={property._id} property={property} />
        })
    }

    return (
        <div className='container'>
            {generateProperties(props.data)}
        </div>
    )
}

export default Properties;


