import React from 'react';
import { Link } from 'react-router-dom';




const AgentCard = (props) => {
    const { name, agency, experience, number, _id} = props.agent;


    return (
        <>
       
        <section class="property-details-section spad">
		<div class="container">
			<div class="row">
				<div class="col-xl-6 col-lg-7">
					<div class="property-details">
						<h2>{name}</h2>
						<div class="property-info">
							<h6>Agency</h6>
							<div class="pi-icon">
								<i class="flaticon-151-plans"></i>
    <span>{agency}</span>
							</div>
						</div>
                        <div class="property-info">
							<h6>Experience</h6>
							<div class="pi-icon">
								<i class="flaticon-151-plans"></i>
    <span>{experience}</span>
							</div>
						</div>
						<div class="property-info">
							<h6>Number</h6>
							<div class="pi-icon">
								<i class="flaticon-151-beds"></i>
                    <span>{number}</span>
							</div>
						</div>
                        </div>
			</div>
            </div>
		</div>
	</section>
 
                        <br />
            <>

  <Link to={`/atl-lux/agents/${_id}/delete`} class="site-btn">Delete</Link>

  </>
 
        </>
       
    )
}

export default AgentCard;