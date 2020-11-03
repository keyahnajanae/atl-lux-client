
import './Footer.css'

const Footer = (props) => {
    return (
    
	<footer class="footer-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-2 col-sm-12">
					<div class="footer-widget">

					</div>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-4">
					<div class="footer-widget">
						<h5>COMPANY</h5>
						<ul>
							<li><a href="">About Us</a></li>
							<li><a href="">Offices</a></li>
							<li><a href="">Contact Us</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-4">
					<div class="footer-widget">
						<h5>LEGAL</h5>
						<ul>
							<li><a href="">Documents</a></li>
							<li><a href="">How to buy a house</a></li>
							<li><a href="">Terms & Condition</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4">
					<div class="footer-widget">
						<h5>SOCIAL</h5>
						<div class="footer-social">
							<a href=""><i class="fa fa-facebook"></i></a>
							<a href=""><i class="fa fa-linkedin"></i></a>
							<a href=""><i class="fa fa-twitter"></i></a>
							<a href=""><i class="fa fa-youtube-play"></i></a>
							<a href=""><i class="fa fa-instagram"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer;