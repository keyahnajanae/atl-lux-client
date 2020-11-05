import HeroSlider from '../components/HeroSlider/HeroSlider'
import { Link } from 'react-router-dom';
import PropertyModel from '../models/PropertyModel'



const DeleteProperty = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault();
    PropertyModel.delete(props.match.params.id).then(
        (json) => {
          props.history.push(`/atl-lux/`);
        }
      )
    }

    return (
        <>
        <HeroSlider/>
        <h1>Are you sure you want to delete ?</h1>
         <form onSubmit={handleSubmit}><input class="site-btn" type='submit' value='Delete'/></form>

         
        <h3><Link to={`/atl-lux/for-sale/`}>No</Link></h3>
        </>
      
    )
}


export default DeleteProperty;