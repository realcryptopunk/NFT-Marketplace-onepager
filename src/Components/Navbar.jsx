import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/nft-logo.png';

function Navbar() {
    return (
        <div>
             <nav>
                <Link TO='main' className = 'logo'smooth={true} duration={2000}>
                     <img src={logo} alt='logo'/>    
               </Link>
               <input className='menu-btn' type='checkbox' id='menu-btn'/>
               <label className='menu-icon' for='menu-btn'>
                   <span className='nav-icon'></span>
               </label>
               <ul className= 'menu'>
                   <li><Link to= 'main'className='active' smooth={true} duration={1000} >Home</Link></li>
                   <li><Link to= 'features'smooth={true} duration={1000}>Features</Link></li>
                   <li><Link to= 'features'smooth={true} duration={1000}>Metaverse</Link></li>
                   <li><Link to= 'marketplace'smooth={true} duration={1000}>Marketplace</Link></li>
                   <li><Link to= 'waitlist'smooth={true} duration={1000}>Waitlist</Link></li>
               </ul>
            </nav> 
    </div>
    ) 
}

export default Navbar;
