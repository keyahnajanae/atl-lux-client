import HeroSlider from '../components/HeroSlider/HeroSlider'
import {Link}from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";




const UserProfile = (props) =>{

	const [user, setUser] = useRecoilState(userState);

  
    return (
<>
        <HeroSlider/>
        <Link class="site-btn" to='/atl-lux/properties/new'>Add New Listing</Link>
		<Link class="site-btn" to='/atl-lux/agents/new'>Add New Agent</Link>
{/* <Link class="site-btn" to={`/atl-lux/user/edit`}>Edit Profile</Link> */}
    <h1>Hello, {user.username}</h1>
</>
    )
}

export default UserProfile;