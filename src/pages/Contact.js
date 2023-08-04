import HeroSlider from '../components/HeroSlider/HeroSlider'
import location from '../images/icons/location.png'
import headphone from '../images/icons/headphone.png'
import chat from '../images/icons/chat.png'
import profile from '../images/icons/profile.png'
import envelope from '../images/icons/envelope.png'
import './Contact.css'

const Contact = (props) => {
    return (<>
        <HeroSlider/>
        <section class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-7 offset-lg-5">
					<div class="contact-info-box">
						<h5 class="contact-title">OFFICE</h5>
						<div class="contact-info">
							<div class="ci-item">
								<img src={location} class="ci-icon" alt=""/>
								<p>1385  Cedar Street, Buckhead, Atlantaa, 30035</p>
							</div>
							<div class="ci-item">
								<img src={headphone} class="ci-icon" alt=""/>
								<p>870-878-6345<br/>870-515-8691</p>
							</div>
						</div>
						<h5 class="contact-title">QUICK HELLO</h5>
						<form class="contact-form">
							<div class="form-field">
								<img src={profile} alt="" />
								<input type="text" placeholder="Full Name"/>
							</div>
							<div class="form-field">
								<img src={envelope} alt="" />
								<input type="text" placeholder="Email Address"/>
							</div>
							<div class="form-field">
								<img src={chat} alt=""/>
								<textarea placeholder="Hi ..."></textarea>
							</div>
							<button class="site-btn">send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		
		<div class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106045.68854271522!2d-84.47014345912821!3d33.839973398858426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f5c4bd21ff5%3A0x3ae702c9bbf5477f!2sBuckhead%2C%20Atlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1604453412254!5m2!1sen!2sus"></iframe>
            
		</div>
	</section>
    </>
    )
}

export default Contact;