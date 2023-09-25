import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container">


            <div className='flexColStart hero-left'>
                <div className="hero-title">
                    <div className='orange-circle'/>
                    <h1>
                        Get Your <br/> Next Home
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Discover property which suit you</span>
                    <span className='secondaryText'>Get here and we will do the heavy lifting for you</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className='button'>search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/><span>+</span>
                        </span>
                        <span className='secondaryText'>Properties</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/><span>+</span>
                        </span>
                        <span className='secondaryText'>Satisfied Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={100}/><span>+</span>
                        </span>
                        <span className='secondaryText'>Awards</span>
                    </div>
                </div>
            </div>
            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src='./hero-image.png' alt='right-img'/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero