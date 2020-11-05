import React from 'react';
import { NavLink } from 'react-router-dom';
import UserModel from "../../models/UserModel";
import { useEffect } from 'react'
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import './Header.css';


const Header = (props) => {
	const [user, setUser] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
      });
    }
    // eslint-disable-next-line
  }, []);

  function logout() {
    setUser(null);
    localStorage.clear();
  }
    return (
        <header class="header-section">
		<div class="container">
			<ul class="main-menu">
				{user ? (
					<>
					<li>{user.username}</li>
					<li> <NavLink class="atl-lux" to='/atl-lux'>ATL LUX</NavLink></li>
				<li><NavLink id="a-p" class="item"  to='/atl-lux/for-sale'>Developments</NavLink></li>
			
				<li><NavLink class="item" to='/atl-lux/for-rent'>Rental Properties</NavLink></li>
				<li><NavLink class="item" to='/atl-lux/contact'>Contact</NavLink></li><li>
					  <NavLink to={"/atl-lux/agents"}>Consultants</NavLink>
					</li>
					
					<li> <NavLink class="item" to='/atl-lux/user'>View Profile</NavLink></li>
					<li className='btn' onClick={logout}>Log Out</li>
					</>
				) : (
					<>
							<li>
					  <NavLink to={"/atl-lux/agents"}>Consultants</NavLink>
					</li>	
				
				<li><NavLink id="a-p" class="item"  to='/atl-lux/for-sale'>Developments</NavLink></li>
			
				<li><NavLink class="item" to='/atl-lux/for-rent'>Rental Properties</NavLink></li>
				<li> <NavLink class="atl-lux" to='/atl-lux'>ATL LUX</NavLink></li>
			
				<li><NavLink class="item" to='/atl-lux/contact'>Contact</NavLink></li>
					<li>
					  <NavLink to={"/atl-lux/login"}>Login</NavLink>
					</li>
					<li>
					  <NavLink to={"/atl-lux/register"}>Register</NavLink>
					</li>
			
				  </>
				)}
			</ul>
		</div>
	</header>

    );

};

export default Header;