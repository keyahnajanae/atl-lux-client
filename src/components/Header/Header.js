import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = (props) => {
    return (
        <header class="header-section">
	
		<a href="index.html" class="site-logo">
			<img src="img/logo.png" alt=""></img>
		</a>
		<div class="nav-switch">
			<i class="fa fa-bars"></i>
		</div>
		<div class="container">
			<ul class="main-menu">
				<li> <NavLink class="active-item" to='/atl-lux'>ATL LUX</NavLink></li>
				<li><a href="/atl-lux/about">About Us</a></li>
				<li><NavLink id="a-p" class="item"  to='/atl-lux/for-sale'>Developments</NavLink></li>
				<li> <NavLink class="item" to='/atl-lux/properties/new'>Add New Listing</NavLink> </li>
				<li><NavLink class="item" to='/atl-lux/for-rent'>Rental Properties</NavLink></li>
			
			</ul>
		</div>
	</header>
        
       
        
       
        
      
       
    
  
   

         



    )
   
}

export default Header;