
import './Action.css'
import cta from '../../images/cta-bg.jpg'


const Action= () => {
    return (
        <section class="call-to-action-section">
             <img src={cta} alt=""/>
		<div class="container text-center">
       
			<h2>Ask our top consultants for a personalized offer today. </h2>
			<button class="site-btn sb-big">CALL 202-123-5141</button>
		</div>
	</section>
    );
  }
  
  export default Action;