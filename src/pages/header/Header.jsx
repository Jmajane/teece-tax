import "./header.css"
import TeeceTax from "../../assets/TeeceTax.png"

const Header = () => {
  return (
    <section id='header'>       
        <div className='header'>
            <img className='header__image' src={TeeceTax} alt="company logo" />
        </div>
    </section>
  )
}

export default Header