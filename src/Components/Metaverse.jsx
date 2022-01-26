import React from 'react'
import featureimage from '../images/VR.png';

function Metaverse() {
    return (
        <div id='features'>
                <div className ='features-model'>
                    <img src={featureimage} alt='feature-image'/>
                </div>
                <div className='features-text'>
                    <h2>Metaverse</h2>
                    <h3> Export your NFTS into VR experiences </h3>
                    <p> Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Pariatur officia reprehenderit 
                        quod quasi excepturi nulla, fuga a, repellat fugit debitis, 
                        est eos corrupti! Eius ratione, doloribus incidunt accusamus 
                        tempore porro!</p>
                    <button> Export NFT</button>
                </div>
        </div>
    )
}

export default Metaverse
