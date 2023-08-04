
import {Link}from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import './Login.css'




const UserProfile = (props) =>{

	const [user, setUser] = useRecoilState(userState);

  
    return (
<>

<body class="login">
     
     <main class="login-form">
         <div class="cotainer">
       
        <Link id="a-n" class="site-btn" to='/atl-lux/properties/new'>Add New Listing</Link>
		<Link id="a-m" class="site-btn" to='/atl-lux/agents/new'>Add New Agent</Link>
        <Link class="site-btn" to={`/atl-lux/user/edit`}>Edit Profile</Link> 
    <h1 id="u-u">Hello, {user.username}</h1>
    </div>
    </main>
    </body>
</>
    )
}

export default UserProfile;