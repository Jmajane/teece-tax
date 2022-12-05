import "./header.css"
import TeeceTax from "../../assets/TeeceTax.png"

const Header = () => {
  return (
    <section id='header'>       
        <div className='header'>
            <img className='header__image' src={TeeceTax} alt="company logo" />
            <div className='button'>
                <a href='/Contact' className='btn btn-primary'>Send your taxes our way</a>
            </div>
        </div>
    </section>
  )
}

export default Header