import React from 'react';
import { Link } from 'react-router-dom';



const Rentals = (props) => {
    function generateRentals(forRent) {
        return forRent.map(rental => {
            return(
                <>
        <section class="developments-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="development-box"></div>
                    <Link to={`/atl-lux/properties/${rental._id}`}>
                        <div className='property-card'>
                            <div className='image-wrapper'>
                                
                            </div>
                            <h3>{rental.title}</h3>
                             <h2>{rental.address}</h2>
                            <p>Uploaded By: {rental.agent}</p>
                        </div>
                    </Link>
                    <Link to={`/properties/${rental._id}/edit`} style={{color: 'black'}}>Edit</Link>
                    </div>
                    </div>
                    </div>
                    </section>
                </>
            )
        })
    }

    return (
        <div className='container'>
            {generateRentals(props.data)}
        </div>
    )
}

export default Rentals;