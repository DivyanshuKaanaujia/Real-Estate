import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src='./logo.png' alt='Logo' width={100}/>

            <div style={{gap:"2rem"}} className="flexCenter h-menu">
                <a href="">Residencies</a>
                <a href="">Our value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button> 
            </div>
            <div className="menu-icon">
              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header