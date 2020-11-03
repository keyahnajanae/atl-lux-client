import dev from '../../images/developments/1.jpg'
import dev2 from '../../images/developments/2.jpg'
import dev3 from '../../images/developments/3.jpg'
import dev4 from '../../images/developments/4.jpg'
import dev5 from '../../images/developments/5.jpg'
import dev6 from '../../images/developments/6.jpg'


const Dev = (props) => {
    return (
        <section class="developments-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev} alt=""/>
						<div class="dev-text">
							<h4>COLD VALLEY Estates </h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$145,000</h4>
							</div>
							<a href="" class="site-btn">MORE INFO</a>
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
				<div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev4} alt=""/>
						<div class="dev-text">
							<h4>port way</h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$220,000</h4>
							</div>
							<a href="" class="site-btn">MORE INFO</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev5} alt=""/>
						<div class="dev-text">
							<h4>lux estates</h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$510,000</h4>
							</div>
							<a href="" class="site-btn">MORE INFO</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="development-box">
						<img src={dev6} alt=""/>
						<div class="dev-text">
							<h4>sunset road</h4>
							<h5>3465  Elk City Road</h5>
							<p>Nam gravida elit non massa congue, ac commodo ipsum mattis. Fusce erat magna, egestas vitae arcu non, posuere iaculis leo. </p>
							<div class="dev-price">
								<span>from</span>
								<h4>-$600,000</h4>
							</div>
							<a href="" class="site-btn">MORE INFO</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Dev;