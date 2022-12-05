import React from 'react'

const Footer = () => {
  return (
    <footer>
        <a href='/' className='footer__logo'>Teece Tax</a>

        <ul className='permalinks'>
            <li><a href='/'>Home</a></li>
            <li><a href='/PersonalTaxes'>Personal Taxes</a></li>
            <li><a href='/SmallBusiness'>Small Business</a></li>
            <li><a href='/LLC'>LLC</a></li>
            <li><a href='/Contact'>Contact</a></li>
        </ul>

        
    </footer>
  )
}

export default Footer