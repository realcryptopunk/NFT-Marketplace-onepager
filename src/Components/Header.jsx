import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1> ASTRO NFT <span>MARKETPLACE</span> </h1>
            <p className= 'details'>Astro Marketplace is a multi-chain NFT market place and Metaverse ramp. Get Easy access to digial collectibles and the ability to buy,sell, and trade NFTS from different artists and projects.  </p>
            <div className='header-btns'>
    
            </div>
        </div>
        <div className='arrow'></div>
        </div>
    )
}

export default Header;
