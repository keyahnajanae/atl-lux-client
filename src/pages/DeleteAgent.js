
import { Link } from 'react-router-dom';
import AgentModel from '../models/AgentModel'
import './Login.css'




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
      <body class="login">
        <main class="login-form"></main>
     <div class="cotainer" id="cot-2">
      <h1>Are You Sure You Want To Delete ?</h1>
       <form id="d-p" onSubmit={handleSubmit}><input class="site-btn" type='submit' value='Delete'/></form>

       
      <Link id="dip-2" class="site-btn"to={`/atl-lux/agents/`}>No</Link>
      </div>
      </body>
      </>
      
      
    )
}


export default DeleteAgent;