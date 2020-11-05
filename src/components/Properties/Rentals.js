import React from 'react';
import { Link } from 'react-router-dom';
import './Rental.css'
import dev2 from '../../images/developments/2.jpg'
import dev3 from '../../images/developments/3.jpg'




const Rentals = (props) => {


    function generateRentals(forRent) {
        return forRent.map(rental => {
            return(
                <>
        <section class="developments-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="development-box">
                    <img src={rental.photos} alt={rental.title}/>
                    <div class="dev-text">
                            <h4>{rental.title}</h4>
                             <h5>{rental.address}</h5>
                            <p>{rental.description}</p>
                            <div class="dev-price">
								<span>from</span>
                            <h4>-${rental.price}</h4>
							</div>
                          
                            <Link class="site-btn" to={`/atl-lux/properties/${rental._id}`}>MORE INFO </Link>
                    </div>
            
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev2}alt=""/>
						<div class="dev-text">
							<h4>amazing residence</h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$345,000</h4>
							</div>
							<button class="site-btn sb-solid">SOLD OUT</button>
						</div>
					</div>
				</div>
                <div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev3} alt=""/>
						<div class="dev-text">
							<h4>cube houses</h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$95,000</h4>
							</div>
							<button class="site-btn sb-fade">COMING SOON</button>
						</div>
					</div>
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
             {props.data !== null ? generateRentals(props.data) : <h1> Coming Soon ...</h1>}
        </div>
    )
}

export default Rentals;