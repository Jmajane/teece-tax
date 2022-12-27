import React from "react"
import "./header.css"

import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <section id='header'>       
        <div className='header'>
            <img className='header__image' src={Logo} alt="company logo" />
            <div className='button'>
                <a href='/Contact' className='btn btn-primary'>Contact Us</a>
            </div>
        </div>
    </section>
  )
}

export default Header