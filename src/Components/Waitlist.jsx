import React from 'react';

function Waitlist() {
    return(
        <div id= 'waitlist'>
            <h3>Join the Waitlist </h3>
            <div className='waitlist-input'>
                <input type='email' placeholder='example@gmail.com'/>
                <a href='#' >Continue </a>
            </div>
        </div>
    )
}

export default Waitlist;