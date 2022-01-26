import React from 'react'
import featureimage from '../images/Feature.png';

function Features() {
    return (
        <div id='features'>
                <div className ='features-model'>
                    <img src={featureimage} alt='feature-image'/>
                </div>
                <div className='features-text'>
                    <h2>Buy, Sell, Trade NFTS</h2>
                    <h3> Marketplace </h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus nihil, eligendi labore voluptatibus sunt hic consequatur omnis aliquid? Repellat accusamus consectetur consequatur modi labore possimus non sit architecto quis?</p>
                    <button> Learn more</button>
                </div>
        </div>
    )
}

export default Features