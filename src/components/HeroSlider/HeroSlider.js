import React from 'react';
import imageOne from '../../images/slider/1.jpg';
import imageTwo from '../../images/slider/2.jpg';
import imageThree from '../../images/slider/3.jpg'


import './HeroSlider.css';




const HeroSlider = (props) => {
    return (
       
	
        <section class="hero-section">
		<div class="hero-social-warp">	
            <div class="fotorama">
        <img src={imageOne}/>
        <img src={imageTwo}/>
        <img src={imageThree}/>
      </div>
	
		
        </div>
	</section>
					

    )
}

export default HeroSlider;