import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Action from '../../components/Features/Action'
import propFeat from '../../images/property-features/2.jpg'
import propFeat2 from '../../images/property-gallery/1.jpg'
import propFeat3 from '../../images/property-gallery/3.jpg'
import propFeat4 from '../../images/property-gallery/2.jpg'


const PropertyCard = (props) => {
    const { title, user, type, baths, beds, price, address, _id, photos, description, agent} = props.property;
    console.log('user', user)

    return (
        <>
        <HeroSlider/>
        <section class="property-details-section spad">
		<div class="container">
			<div class="row">
				<div class="col-xl-6 col-lg-7">
					<div class="property-details">
						<h2>{title}</h2>
						<div class="property-info">
							<h6>Address</h6>
							<div class="pi-icon">
								<i class="flaticon-151-plans"></i>
    <span>{address}</span>
							</div>
						</div>
                        <div class="property-info">
							<h6>Type</h6>
							<div class="pi-icon">
								<i class="flaticon-151-plans"></i>
    <span>{type}</span>
							</div>
						</div>
						<div class="property-info">
							<h6>Beds</h6>
							<div class="pi-icon">
								<i class="flaticon-151-beds"></i>
                    <span>{beds}</span>
							</div>
						</div>
						<div class="property-info">
							<h6>Baths</h6>
							<div class="pi-icon">
								<i class="flaticon-151-relax"></i>
								<span>{baths}</span>
							</div>
						</div>
					</div>
					<p>{description}</p>
				</div>
				<div class="col-xl-6 col-lg-5 text-lg-right text-left">
					<div class="property-price">
						<h2> $ {price}</h2>
						<p>(taxes excluded)</p>
						<img src={photos} alt=""/>
					</div>
				</div>
			
				<>
  <Link to={`/atl-lux/properties/${_id}/edit`} class="site-btn" id="edit-btn">Edit</Link>
  <Link to={`/atl-lux/properties/${_id}/delete`} class="site-btn" id="del-btn">Delete</Link>
  </>
  {/* <div class="property-features-slider fotoroma">
		
			<img class="p-c" src={propFeat2} alt=""/>
			
		
			<img class="p-c" src={propFeat4} alt=""/>
			
		
			<img class="p-c"  src={propFeat3} alt=""/>
			
	</div> */}
			</div>
		</div>
	</section>
	<section class="property-overview-section spad pb-0">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="property-overview-text">
						<h4>GENERAL OVERVIEW</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sollicitudin sem. Curabitur sollicitudin enim vel lacus vehicula, vitae sodales ipsum porta.</p>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="property-overview-text">
						<h4>GENERAL OVERVIEW</h4>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Praesent tincidunt diam in ante faucibus tristique.</li>
							<li>Vivamus id nisl sed mi varius lobortis.</li>
							<li>Suspendisse sit amet erat placerat, molestie neque id</li>
							<li>Fusce pretium libero sit amet ipsum posuere pretium.</li>
							<li>Praesent tincidunt diam in ante faucibus tristique.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid pt-5">
			<div class="row">
				<div class="col-lg-6 p-0">
					<img class="p-c-p" src={photos} alt=""/>
				</div>
				<div class="col-lg-6 p-0 d-flex align-items-center justify-content-center">
					<div class="property-text-warp">
						<div class="property-overview-text">
							<h4>GENERAL OVERVIEW</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sollicitudin sem. Curabitur sollicitudin enim vel lacus vehicula, vitae sodales ipsum porta.</p>
							<a href="" class="site-btn">MORE INFO</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6 p-0 d-flex align-items-center justify-content-center order-2 order-lg-1">
					<div class="property-text-warp">
						<div class="property-overview-text">
							<h4>GENERAL OVERVIEW</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sollicitudin sem. Curabitur sollicitudin enim vel lacus vehicula, vitae sodales ipsum porta.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6 p-0 order-1 order-lg-2">
					<img src={propFeat} alt=""/>
				</div>
			</div>
		</div>
	</section>
   
            
       
  <Action />
        </>
       
    )
}

export default PropertyCard;

