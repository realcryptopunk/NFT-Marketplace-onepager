import React from 'react';
import Box from './Box';
import image1 from '../images/nft-baseball.png'
import image2 from '../images/nft-film.png'
import image3 from '../images/nft-snicker.png'
import image4 from '../images/nft-frame-art.png'

function Marketplace() {
    return (
        <div id= 'marketplace'>
                <div className='s-heading'>
                    <h1>Shop Now</h1>
                </div>
                <div className= 'b-container'>
                    <Box image={image1} alte= 'image1' button="Buy Now" />
                    <Box image={image2} alte= 'image2' button="Buy Now " />
                    <Box image={image3} alte= 'image3' button="Buy Now" />
                    <Box image={image4} alte= 'image4' button="Buy Now" />
                </div>
        </div>
    )
}


export default Marketplace; 