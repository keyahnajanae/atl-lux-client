import HeroSlider from '../components/HeroSlider/HeroSlider'
import { Link } from 'react-router-dom';
import AgentModel from '../models/AgentModel'



const DeleteAgent = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault();
    AgentModel.delete(props.match.params.id).then(
        (json) => {
          props.history.push(`/atl-lux/agents`);
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


export default DeleteAgent;