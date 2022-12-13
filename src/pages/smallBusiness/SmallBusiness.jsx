import './smallBusiness.css'

import Footer from '../footer/Footer'

import {GiCheckMark} from 'react-icons/gi'
import {MdAttachMoney} from 'react-icons/md'

const Small = () => {
  return (
    <section id='smallBusiness'>
      <div className='container smallBusiness__title'>
        <h1>Personal Taxes</h1>
      </div>

      <div className='container smallBusiness__container'>
        <article className='smallBusiness'>
          <div className='smallBusiness__head'>
            <h2>Personal Tax Returns</h2>
          </div>

          <ul className='smallBusiness__list'>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Federal Return</p>
              <p><MdAttachMoney className='home__list-icon' />115</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Per State Return</p>
              <p><MdAttachMoney className='home__list-icon' />25</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Per Schedule C Business</p>
              <p><MdAttachMoney className='home__list-icon' />75</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Per Schedule E Rental Property</p>
              <p><MdAttachMoney className='home__list-icon' />75</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> 1099-B Stocks / Cyrpto</p>
              <p><MdAttachMoney className='home__list-icon' />10</p>
            </li>
          </ul>
        </article>
      </div>

      <Footer />
      
    </section>
  )
}

export default SmallBusiness