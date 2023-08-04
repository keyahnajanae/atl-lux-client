import villaImg from '../../images/intro/1.jpg'
import villaImg2 from '../../images/intro/2.jpg'
import {NavLink} from 'react-router-dom'

const Intro = (props)=>{
    return (
        <section class="intro-section">
		<div class="container">
			<div class="section-title">
				<h2>Live in Luxury</h2>
			</div>
			<div class="row">
				<div class="col-lg-8">
					<div class="intro-img-box">
						<h4>SOUTHERN BEAUTY</h4>
						<img src={villaImg} alt=""/>
					</div>
				</div>
				<div class="col-lg-4 align-items-end d-flex">
					<div class="intro-text-box">
						<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posu-ere iaculis leo. Sed a lectus risus. Morbi eros sapien, inter-dum ut sollicitudin eget, porttitor nec elit. Fusce dignis-sim velit sit amet ligula dapibus fringilla. Cras fermentum consequat ornare. Etiam tempus ex nec nibh eleifend, nec tempus ipsum finibus. </p>
                        <NavLink class="site-btn" to='/atl-lux/for-rent'>MORE RENTALS</NavLink>
					
					</div>
				</div>
				<div class="col-lg-4 align-items-end d-flex order-2 order-lg-1">
					<div class="intro-text-box">
						<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posu-ere iaculis leo. Sed a lectus risus. Morbi eros sapien, inter-dum ut sollicitudin eget, porttitor nec elit. Fusce dignis-sim velit sit amet ligula dapibus fringilla. Cras fermentum consequat ornare. Etiam tempus ex nec nibh eleifend, nec tempus ipsum finibus. </p>
                        <NavLink class="site-btn" to='/atl-lux/for-sale'>MORE SALES</NavLink>
						
					</div>
				</div>
				<div class="col-lg-8 order-1 order-lg-2">
					<div class="intro-img-box">
						<h4>QUOGUE VILLAGE MODERN</h4>
						<img src={villaImg2} alt=""/>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Intro;