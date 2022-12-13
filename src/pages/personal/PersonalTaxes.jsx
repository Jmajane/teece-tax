import './personalTaxes.css'
import Footer from '../footer/Footer'

import {GiCheckMark} from 'react-icons/gi'
import {MdAttachMoney} from 'react-icons/md'

const PersonalTaxes = () => {
  return (
    <section id='personalTaxes'>
      <div className='container personalTaxes__title'>
        <h1>Personal Taxes</h1>
      </div>

      <div className='container personalTaxes__container'>
        <article className='personalTaxes'>
          <div className='personalTaxes__head'>
            <h2>Tax Returns</h2>
          </div>

          <ul className='personalTaxes__list'>
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

export default PersonalTaxes
