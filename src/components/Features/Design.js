import img1 from '../../images/design/1.jpg'
import img2 from '../../images/design/2.jpg'
import img3 from '../../images/design/3.jpg'

import './Design.css'


const Design = (props) => {
    return (
       
        <section class="design-section">
		<div class="container">
			<div class="section-title st-light">
				<h2>Modern Designs</h2>
			</div>
		</div>
		<div class="design-slider">
        <div id="foto2" class="fotorama">
				<img src={img1} alt=""/>
				<img src={img2} alt=""/>
				<img src={img3} alt=""/>
				<img src={img2} alt=""/>
	
            </div>
			<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="design-text text-white">
						<h4>INTERIOR </h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="design-text text-white">
						<h4>ENVIORMENT FRIENDLY</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
					</div>
				</div>
			</div>
		</div>
            </div>
	

	</section>	

    )
}

export default Design;