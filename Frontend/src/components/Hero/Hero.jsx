import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
// import mainimac from '../assets/mainimac.jpg'

const Hero=()=>{
    return (
        <div className='hero'>
            <div className='hero-left'>
                <br />
                <br />
                <br />
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div  className='hand-hand-icon'>
                    <img src={hand_icon} alt="" />
                    <p>new</p>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collectios</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>
            {/* <div className="hero-right">
                <img src={mainimac} alt="" />

            </div> */}
        </div>
    )
}
export default Hero