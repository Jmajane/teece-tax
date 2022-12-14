import './footer.css'

import {GrFacebook} from 'react-icons/gr'


const Footer = () => {
  return (
    <footer>
        <a href='/' className='footer__logo'>Teece Tax Solutions</a>

        <ul className='permalinks'>
            <li><a href='/'>Home</a></li>
            <li><a href='/PersonalTaxes'>Personal Taxes</a></li>
            <li><a href='/SmallBusiness'>Small Business</a></li>
            <li><a href='/Contact'>Contact</a></li>
            <li><a href="https://www.mytaxdocs.com/?o=19413" target='_blank' rel="noreferrer">Client Portal</a></li>
        </ul>

        <ul className='permalinks'>
          <li>
            <a href='https://www.facebook.com/TeeceTaxSolutions' target="_blank" rel="noreferrer"><GrFacebook className='footer__list-icon'/> Follow us on FaceBook</a>
          </li>
        </ul>

        <div className='footer__copyright'>
            <small>&copy; Teece Tax Solutions. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer